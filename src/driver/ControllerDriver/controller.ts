import { cloneDeep } from 'lodash';
import React from 'react';
import type { DefaultRecord } from 'react-form-simple';
import { isObject } from 'react-form-simple/utils/util';

export type ObserverCallback = (args: { path: string; value: any }) => void;

export type ObserverOptions = {
  path?: string[];
  onArrayChange?: () => void;
};

export const cloneTarget = (proxy: any) => cloneDeep(proxy);

export const getProxyValue = (obj: any, path: string): any => {
  if (!path || typeof path !== 'string') return undefined;

  const keys = path.split('.');
  let current = obj;

  for (const key of keys) {
    if (
      current === null ||
      current === undefined ||
      typeof current !== 'object'
    ) {
      return undefined;
    }
    current = current[key];
  }

  return current;
};

export const updateProxyValue = (obj: any, path: string, value: any): void => {
  if (!path || typeof path !== 'string') return;

  const keys = path.split('.');
  let current = obj;

  // Navigate to target position through Proxy's get trap, ensuring each level is a Proxy
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    // Get value through Proxy's get trap, this ensures returning Proxy-wrapped object
    const nextLevel = current[key];

    if (
      nextLevel === null ||
      nextLevel === undefined ||
      typeof nextLevel !== 'object'
    ) {
      // Direct assignment lets Proxy's set trap handle it
      current[key] = {};
      current = current[key]; // Re-get to ensure it's a Proxy
    } else {
      current = nextLevel; // This should be a Proxy returned through get trap
    }
  }

  // Set value, this will trigger Proxy's set trap
  const finalKey = keys[keys.length - 1];

  // If setting object type, need to ensure existing nested structure maintains reactivity
  if (isObject(value) && !isSpecialObject(value)) {
    const existingValue = current[finalKey];
    if (isObject(existingValue)) {
      // If object already exists, use replaceTarget to maintain reactivity
      replaceTarget(existingValue, value);
    } else {
      // If doesn't exist or not an object, set directly (will trigger Proxy set trap to create new reactive object)
      current[finalKey] = value;
    }
  } else {
    // Non-object types set directly
    current[finalKey] = value;
  }
};

const isSpecialObject = (obj: any): boolean => {
  if (!obj || typeof obj !== 'object') return false;

  // Check if it's a React element, DOM node, function, or other special objects
  return (
    React.isValidElement(obj) ||
    obj.nodeType !== undefined ||
    typeof obj === 'function' ||
    obj instanceof Date ||
    obj instanceof RegExp ||
    obj instanceof File ||
    obj instanceof FileList
  );
};

export const replaceTarget = (target: any, source: any): any => {
  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  // Handle array case
  if (Array.isArray(source)) {
    if (!Array.isArray(target)) {
      return [...source];
    }

    // Simplified array update logic
    target.length = source.length;
    for (let i = 0; i < source.length; i++) {
      if (isSpecialObject(source[i])) {
        target[i] = source[i];
      } else if (isObject(source[i])) {
        target[i] = target[i] || {};
        replaceTarget(target[i], source[i]);
      } else {
        target[i] = source[i];
      }
    }
    return target;
  }

  // Handle object case
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      const sourceValue = source[key];

      if (isSpecialObject(sourceValue)) {
        target[key] = sourceValue;
      } else if (isObject(sourceValue)) {
        if (!isObject(target[key])) {
          target[key] = Array.isArray(sourceValue) ? [] : {};
        }
        replaceTarget(target[key], sourceValue);
      } else {
        target[key] = sourceValue;
      }
    }
  }

  return target;
};

const observer = <T extends DefaultRecord>(
  target: T,
  callback: ObserverCallback,
  options: ObserverOptions = {},
): T => {
  const { path = [], onArrayChange } = options;

  if (!isObject(target)) {
    return target;
  }

  // Use more efficient Proxy implementation
  return new Proxy(target, {
    get(obj: any, prop: string | symbol) {
      const value = obj[prop];

      if (isSpecialObject(value)) {
        return value;
      }

      if (isObject(value)) {
        return observer(value, callback, {
          path: [...path, String(prop)],
          onArrayChange,
        });
      }

      return value;
    },

    set(obj: any, prop: string | symbol, value: any) {
      const currentPath = [...path, String(prop)].join('.');
      const oldValue = obj[prop];

      // Optimization: only trigger callback when value actually changes
      if (oldValue !== value) {
        obj[prop] = value;
        callback({ path: currentPath, value });

        // Trigger special callback when array length changes
        if (Array.isArray(obj) && prop === 'length' && onArrayChange) {
          onArrayChange();
        }
      }

      return true;
    },

    deleteProperty(obj: any, prop: string | symbol) {
      const currentPath = [...path, String(prop)].join('.');
      delete obj[prop];
      callback({ path: currentPath, value: undefined });
      return true;
    },
  });
};

export const createObserverForm = observer;
