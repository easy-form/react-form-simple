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

  // 通过Proxy的get trap导航到目标位置，确保每一层都是Proxy
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    // 通过Proxy的get trap获取值，这会确保返回Proxy包装的对象
    const nextLevel = current[key];

    if (
      nextLevel === null ||
      nextLevel === undefined ||
      typeof nextLevel !== 'object'
    ) {
      // 直接赋值让 Proxy 的 set trap 处理
      current[key] = {};
      current = current[key]; // 重新获取，确保是Proxy
    } else {
      current = nextLevel; // 这应该是通过get trap返回的Proxy
    }
  }

  // 设置值，这会触发Proxy的set trap
  const finalKey = keys[keys.length - 1];

  // 如果设置的是对象类型，需要确保现有的嵌套结构保持响应式
  if (isObject(value) && !isSpecialObject(value)) {
    const existingValue = current[finalKey];
    if (isObject(existingValue)) {
      // 如果已经存在对象，使用 replaceTarget 来保持响应式
      replaceTarget(existingValue, value);
    } else {
      // 如果不存在或不是对象，直接设置（会触发 Proxy set trap 创建新的响应式对象）
      current[finalKey] = value;
    }
  } else {
    // 非对象类型直接设置
    current[finalKey] = value;
  }
};

const isSpecialObject = (obj: any): boolean => {
  if (!obj || typeof obj !== 'object') return false;

  // 检查是否为React元素、DOM节点、函数等特殊对象
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

  // 处理数组情况
  if (Array.isArray(source)) {
    if (!Array.isArray(target)) {
      return [...source];
    }

    // 简化数组更新逻辑
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

  // 处理对象情况
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

  // 使用更高效的Proxy实现
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

      // 优化：只在值真正改变时触发回调
      if (oldValue !== value) {
        obj[prop] = value;
        callback({ path: currentPath, value });

        // 数组长度变化时触发特殊回调
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
