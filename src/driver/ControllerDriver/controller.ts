import React from 'react';
import type { DefaultRecord } from 'react-form-simple';
import { isObjectOrArray } from 'react-form-simple/utils/util';

export type ObserverOptions = {
  path?: string[];
  // 添加对象路径追踪，解决动态数组重排序问题
  pathTracker?: WeakMap<any, string>;
  // 根代理引用
  rootProxy?: any;
  // 是否强制重新创建代理（用于 reset 场景）
  forceRecreate?: boolean;
};

export type ObserverCb = { path: string; value: any };

// 用于存储对象到代理的映射
const objectToProxyMap = new WeakMap<any, any>();
// 用于存储代理到原始对象的映射
const proxyToObjectMap = new WeakMap<any, any>();

export const replaceTarget = (proxyObject: any, values: any) => {
  // 简单方式：直接替换属性，让代理系统自己处理
  // 先删除不在新值中的属性
  Object.keys(proxyObject).forEach((key) => {
    if (!(key in values)) {
      delete proxyObject[key];
    }
  });

  // 然后设置新值
  Object.entries(values).forEach(([key, value]) => {
    proxyObject[key] = value;
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

// 获取对象在当前代理中的实际路径
const getActualPath = (rootProxy: any, target: any): string[] => {
  if (!rootProxy || !target) return [];

  const findPath = (
    current: any,
    searchTarget: any,
    path: string[] = [],
  ): string[] | null => {
    if (current === searchTarget) {
      return path;
    }

    if (current && typeof current === 'object') {
      // 获取原始对象进行比较
      const originalCurrent = proxyToObjectMap.get(current) || current;

      if (Array.isArray(originalCurrent)) {
        for (let i = 0; i < originalCurrent.length; i++) {
          const item = originalCurrent[i];
          if (item === searchTarget) {
            return [...path, i.toString()];
          }
          if (item && typeof item === 'object') {
            const result = findPath(item, searchTarget, [
              ...path,
              i.toString(),
            ]);
            if (result) return result;
          }
        }
      } else {
        for (const [key, value] of Object.entries(originalCurrent)) {
          if (value === searchTarget) {
            return [...path, key];
          }
          if (value && typeof value === 'object') {
            const result = findPath(value, searchTarget, [...path, key]);
            if (result) return result;
          }
        }
      }
    }

    return null;
  };

  const originalRoot = proxyToObjectMap.get(rootProxy) || rootProxy;
  return findPath(originalRoot, target) || [];
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
        // 检查下一个key是否为数字，如果是则创建数组
        const nextKey = keys[i + 1];
        if (!isNaN(Number(nextKey))) {
          current[key] = [];
        } else {
          current[key] = {};
        }
      } else {
        return false;
      }
    }

    // 处理类型不匹配的情况
    if (current[key] !== null && typeof current[key] === 'object') {
      // 检查是否需要从对象转为数组或从数组转为对象
      const nextKey = keys[i + 1];
      const isNextKeyNumeric = !isNaN(Number(nextKey));
      const currentIsArray = Array.isArray(current[key]);

      if (isNextKeyNumeric && !currentIsArray) {
        // 需要转为数组
        if (options.createPath) {
          current[key] = [];
        } else {
          return false;
        }
      } else if (!isNextKeyNumeric && currentIsArray) {
        // 需要转为对象
        if (options.createPath) {
          current[key] = {};
        } else {
          return false;
        }
      }
    } else if (current[key] === null || typeof current[key] !== 'object') {
      if (options.createPath) {
        const nextKey = keys[i + 1];
        if (!isNaN(Number(nextKey))) {
          current[key] = [];
        } else {
          current[key] = {};
        }
      } else {
        return false;
      }
    }

    current = current[key];
  }

  const lastKey = keys[keys.length - 1];
  const lastKeyIndex = Number(lastKey);

  // 如果是数组且key是数字索引
  if (Array.isArray(current) && !isNaN(lastKeyIndex)) {
    // 确保数组有足够的长度
    while (current.length <= lastKeyIndex) {
      current.push(undefined);
    }
    current[lastKeyIndex] = newValue;
    return true;
  } else if (options.forceUpdate || lastKey in current) {
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
  const {
    path = [],
    pathTracker = new WeakMap(),
    rootProxy,
    forceRecreate = false,
  } = (options || {}) as ObserverOptions;

  // 如果已经为这个对象创建过代理且不强制重创建，直接返回
  if (!forceRecreate && objectToProxyMap.has(initialVal)) {
    return objectToProxyMap.get(initialVal);
  }

  const actualRootProxy = rootProxy || null;

  const proxy = new Proxy(initialVal, {
    get(target, key, receiver) {
      const ret = Reflect.get(target, key, receiver);
      if (React.isValidElement(ret)) return ret;

      if (isObjectOrArray(ret)) {
        // 对于嵌套对象，检查是否已经有代理（除非强制重创建）
        if (!forceRecreate && objectToProxyMap.has(ret)) {
          return objectToProxyMap.get(ret);
        }

        // 计算当前路径
        let currentPath: string[];
        if (actualRootProxy && target !== initialVal) {
          // 动态计算实际路径
          currentPath = getActualPath(actualRootProxy, target);
          currentPath.push(key.toString());
        } else {
          currentPath = [...path, key.toString()];
        }

        const childProxy = observer(ret as T, cb, {
          ...(options as ObserverOptions),
          path: currentPath,
          pathTracker,
          rootProxy: actualRootProxy || proxy,
          forceRecreate,
        });

        return childProxy;
      }

      return ret;
    },
    set(target, key, val) {
      let currentPath: string[];

      // 动态计算当前设置操作的实际路径
      if (actualRootProxy) {
        currentPath = getActualPath(actualRootProxy, target);
        currentPath.push(key.toString());
      } else {
        currentPath = [...path, key.toString()];
      }

      const ret = Reflect.set(target, key, val);

      // 如果设置的是对象/数组，清理旧的代理映射
      if (isObjectOrArray(val)) {
        // 清理可能存在的旧映射
        const oldVal = target[key as keyof typeof target];
        if (oldVal && objectToProxyMap.has(oldVal)) {
          const oldProxy = objectToProxyMap.get(oldVal);
          objectToProxyMap.delete(oldVal);
          proxyToObjectMap.delete(oldProxy);
        }
      }

      cb?.({ path: currentPath.join('.'), value: val });
      return ret;
    },
    deleteProperty(target, key) {
      // 处理删除操作
      const deletedValue = target[key as keyof typeof target];
      if (deletedValue && objectToProxyMap.has(deletedValue)) {
        const deletedProxy = objectToProxyMap.get(deletedValue);
        objectToProxyMap.delete(deletedValue);
        proxyToObjectMap.delete(deletedProxy);
      }

      const ret = Reflect.deleteProperty(target, key);

      let currentPath: string[];
      if (actualRootProxy) {
        currentPath = getActualPath(actualRootProxy, target);
        currentPath.push(key.toString());
      } else {
        currentPath = [...path, key.toString()];
      }

      cb?.({ path: currentPath.join('.'), value: undefined });
      return ret;
    },
  });

  // 建立双向映射
  objectToProxyMap.set(initialVal, proxy);
  proxyToObjectMap.set(proxy, initialVal);

  return proxy;
};
