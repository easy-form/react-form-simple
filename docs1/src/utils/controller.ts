import { cloneDeep } from 'lodash';
import ProxyPolyfillBuilder from 'proxy-polyfill/src/proxy';
import React from 'react';
import { isObject, isObjectOrArray } from './util';

export const proxyMap = new WeakMap();
export const rawMap = new WeakMap();

const proxyPolyfill = ProxyPolyfillBuilder();
const Proxys = window.Proxy || proxyPolyfill;

export type ObserverOptions = { path?: string[] };

export type ObserverCb = { path: string; value: any };

export const toTarget = (proxy: any) => rawMap.get(proxy);

export const replaceTarget = (
  proxy: any,
  obj: any,
  isExitNew: boolean = false,
) => {
  if (!isObject(obj)) return proxy;
  const cloneObj = cloneDeep(obj);
  for (const [key, value] of Object.entries(cloneObj)) {
    if (isExitNew) {
      Reflect.set(proxy, key, value);
    } else if (Reflect.has(proxy, key)) {
      Reflect.set(proxy, key, value);
    }
  }
  return proxy;
};

export const getProxyValue = (
  obj: any,
  key?: string | number | undefined | null | Symbol,
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
  key: string | number | undefined | null | Symbol,
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
  const existingProxy = proxyMap.get(initialVal);
  if (existingProxy) {
    return existingProxy;
  }

  if (rawMap.has(initialVal)) {
    return initialVal;
  }

  const { path = [] } = options || {};

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
