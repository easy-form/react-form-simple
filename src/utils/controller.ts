import { cloneDeep } from 'lodash';
import ProxyPolyfillBuilder from 'proxy-polyfill/src/proxy';
import React from 'react';
import { isObject, isObjectOrArray } from './util';

export const proxyMap = new WeakMap();
export const rawMap = new WeakMap();

const _proxyMap = proxyMap;
const _rawMap = rawMap;

const proxyPolyfill = ProxyPolyfillBuilder();
const Proxys = window.Proxy || proxyPolyfill;

export type ObserverOptions = {
  path?: string[];
  proxyMap?: WeakMap<object, any>;
  rawMap?: WeakMap<object, any>;
  onChangeLength?: () => void;
};

export type ObserverCb = { path: string; value: any };

export const toTarget = (proxy: any) => cloneDeep(proxy);

function isPureJSONSerializable(value: any): boolean {
  return (
    value === null ||
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    (Array.isArray(value) && value.every(isPureJSONSerializable)) ||
    (isObject(value) && Object.values(value).every(isPureJSONSerializable))
  );
}

export const replaceTarget = (proxyObject: any, values: any) => {
  if (!isObject(proxyObject) || !isObject(values)) return proxyObject;

  function setValue(obj: any, keys: string[], value: any): void {
    const lastKey = keys.pop() as string | number;
    let currentObj = obj;

    keys.forEach((key) => {
      currentObj = currentObj[key];
      if (!currentObj) {
        throw new Error(`Property not found: ${keys.join('.')}`);
      }
    });

    if (isPureJSONSerializable(value)) {
      if (Array.isArray(value)) {
        currentObj[lastKey] = value.map((item) => {
          if (isObject(item)) {
            const nestedObj: any = {};
            processValues(nestedObj, item);
            return nestedObj;
          }
          return item;
        });
      } else if (isObject(value)) {
        processValues(currentObj[lastKey], value);
      } else {
        if (isObject(currentObj)) {
          currentObj[lastKey] = value;
        }
      }
    } else {
      if (isObject(currentObj)) {
        currentObj[lastKey] = value;
      }
    }
  }

  function processValues(
    obj: any,
    values: Record<string, any>,
    currentPath: string[] = [],
  ): void {
    for (const [key, value] of Object.entries(values)) {
      const path = [...currentPath, key];
      if (isObject(value)) {
        setValue(obj, path, value);
      } else {
        setValue(obj, path, value);
      }
    }
  }

  processValues(proxyObject, values);
  return proxyObject;
};

export const getProxyValue = (
  obj: any,
  key?: string | number | undefined | null | symbol,
): string | boolean | undefined => {
  if (!key || typeof key !== 'string') return '';
  const keys = key.split('.');
  let currentObj = obj;

  for (const currentKey of keys) {
    if (currentObj?.[currentKey] === undefined) {
      return undefined; // Key path doesn't exist in the object
    }
    currentObj = currentObj[currentKey];
  }

  return currentObj;
};

export const updateProxyValue = (
  obj: any,
  key: string | number | undefined | null | symbol,
  newValue: any,
) => {
  if (!obj || !key) return;
  const keys = String(key).split('.');
  let currentObj = obj;

  for (const currentKey of keys.slice(0, -1)) {
    if (
      currentObj?.[currentKey] === undefined ||
      typeof currentObj[currentKey] !== 'object'
    ) {
      break;
    }
    currentObj = currentObj[currentKey];
  }

  const lastKey = keys[keys.length - 1];
  if (lastKey in currentObj) {
    currentObj[lastKey] = newValue;
  }
};

export const observer = <T extends object>(
  initialVal: T,
  cb?: (args: ObserverCb) => void,
  options?: ObserverOptions,
): T => {
  const { path = [], onChangeLength } = options || {};

  const proxy = new Proxys(initialVal, {
    get(target, key, receiver) {
      const ret = Reflect.get(target, key, receiver);
      if (React.isValidElement(ret)) return ret;
      return isObjectOrArray(ret)
        ? observer(ret as T, cb, {
            ...options,
            path: [...path, key.toString()],
          })
        : ret;
    },
    set(target, key, val) {
      const newPath = [...path, key.toString()];

      const ret = Reflect.set(target, key, val);

      cb?.({ path: newPath.join('.'), value: val });

      if (
        Array.isArray(target) &&
        key === 'length' &&
        typeof onChangeLength === 'function'
      ) {
        onChangeLength();
      }

      return ret;
    },
  });

  return proxy;
};

export const createControllerObserver = <T extends object>(
  initialVal: T,
  cb?: (args: ObserverCb) => void,
  options?: ObserverOptions,
): T => {
  const { path = [], rawMap = _rawMap, proxyMap = _proxyMap } = options || {};
  const existingProxy = proxyMap.get(initialVal);
  if (existingProxy) {
    return existingProxy;
  }

  if (rawMap.has(initialVal)) {
    return initialVal;
  }

  const proxy = new Proxys(initialVal, {
    get(target, key, receiver) {
      const ret = Reflect.get(target, key, receiver);
      if (React.isValidElement(ret)) return ret;
      return isObjectOrArray(ret)
        ? createControllerObserver(ret as T, cb, {
            ...options,
            path: [...path, key.toString()],
          })
        : ret;
    },
    set(target, key, val) {
      const newPath = [...path, key.toString()];
      const ret = Reflect.set(target, key, val);
      cb?.({ path: newPath.join('.'), value: val });
      return ret;
    },
  });

  proxyMap.set(initialVal, proxy);
  rawMap.set(proxy, initialVal);
  return proxy;
};
