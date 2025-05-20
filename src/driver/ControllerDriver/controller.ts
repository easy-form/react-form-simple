import React from 'react';
import type { DefaultRecord } from 'react-form-simple';
import { isObjectOrArray } from 'react-form-simple/utils/util';

export type ObserverOptions = {
  path?: string[];
};

export type ObserverCb = { path: string; value: any };

export const replaceTarget = (proxyObject: any, values: any) => {
  Object.entries(values).forEach(([key, value]) => {
    updateProxyValue(proxyObject, key, value);
  });

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
  path: string,
  newValue: any,
  options: {
    createPath?: boolean;
    forceUpdate?: boolean;
  } = {},
): boolean => {
  if (!obj || !path) return false;

  const keys = path.split('.');
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    if (current[key] === undefined) {
      if (options.createPath) {
        current[key] = {};
      } else {
        return false;
      }
    }

    if (typeof current[key] !== 'object' || current[key] === null) {
      if (options.createPath) {
        current[key] = {};
      } else {
        return false;
      }
    }

    current = current[key];
  }

  const lastKey = keys[keys.length - 1];
  if (options.forceUpdate || lastKey in current) {
    current[lastKey] = newValue;
    return true;
  }

  return false;
};

export const observer = <T extends DefaultRecord>(
  initialVal: T,
  cb?: (args: ObserverCb) => void,
  options?: ObserverOptions,
): T => {
  const { path = [] } = (options || {}) as ObserverOptions;

  const proxy = new Proxy(initialVal, {
    get(target, key, receiver) {
      const ret = Reflect.get(target, key, receiver);
      if (React.isValidElement(ret)) return ret;
      return isObjectOrArray(ret)
        ? observer(ret as T, cb, {
            ...(options as ObserverOptions),
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

  return proxy;
};
