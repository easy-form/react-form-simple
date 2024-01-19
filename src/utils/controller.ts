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
};

export type ObserverCb = { path: string; value: any };

export const toTarget = (proxy: any) => cloneDeep(proxy);

interface ProxyObject {
  [key: string]: any;
}
export const replaceTarget = (proxyObject: any, values: any) => {
  if (!isObject(values)) return proxyObject;
  function setNestedValue(obj: ProxyObject, keys: string[], value: any): void {
    const lastKey = keys.pop();
    let currentObj = obj;

    keys.forEach((key) => {
      if (!currentObj[key] || typeof currentObj[key] !== 'object') {
        currentObj[key] = {};
      }
      currentObj = currentObj[key];
    });

    currentObj[lastKey as string] = value;
  }

  function processArray(obj: ProxyObject, value: any[], path: string[]): void {
    obj[path[0]] = value.map((item) => {
      if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
        const nestedObj: ProxyObject = {};
        processValues(nestedObj, item);
        return nestedObj;
      }
      return item;
    });
  }

  function processValues(
    obj: ProxyObject,
    values: Record<string, any>,
    currentPath: string[] = [],
  ): void {
    for (const [key, value] of Object.entries(values)) {
      const path = [...currentPath, key];

      if (Array.isArray(value)) {
        processArray(obj, value, path);
      } else if (typeof value === 'object' && value !== null) {
        processValues(obj, value, path);
      } else {
        setNestedValue(obj, path, value);
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
      return ret;
    },
  });

  proxyMap.set(initialVal, proxy);
  rawMap.set(proxy, initialVal);
  return proxy;
};
