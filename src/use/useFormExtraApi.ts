import { useRef } from 'react';
import type { Apis, DefaultRecord, UseFormReturnType } from 'react-form-simple';
import {
  replaceTarget,
  updateProxyValue,
} from 'react-form-simple/driver/ControllerDriver';
import useForceUpdate from './useForceUpdate';
import { useSubscribe } from './useSubscribe';
import { unWatch, useWatch, watch } from './useWatch';

interface ExtraApisType<T>
  extends Pick<
    UseFormReturnType<T>,
    | 'setState'
    | 'setValues'
    | 'setValue'
    | 'reset'
    | 'forceUpdate'
    | 'useWatch'
    | 'watch'
    | 'unWatch'
    | 'useSubscribe'
  > {}

export const useFormExtraApi = <T extends DefaultRecord>({
  overlayApis,
  defaultValues,
  contextProps,
}: {
  overlayApis: Apis.FormApis;
  defaultValues: T;
  contextProps: UseFormReturnType<T>['contextProps'];
}) => {
  const forceUpdate = useForceUpdate();
  const { model } = contextProps;

  const extraApis = useRef<ExtraApisType<T>>({
    setState: forceUpdate,
    forceUpdate,
    setValues: (updates) => {
      const processUpdate = (currentPath: string, value: any) => {
        if (value && typeof value === 'object') {
          if (Array.isArray(value)) {
            // 数组处理 - 更新整个数组
            updateProxyValue(model, currentPath, value, {
              createPath: true,
              forceUpdate: true,
            });
            console.log(`更新数组: ${currentPath}`);
          } else {
            // 普通对象递归处理
            Object.entries(value).forEach(([key, val]) => {
              const newPath = currentPath ? `${currentPath}.${key}` : key;
              processUpdate(newPath, val);
            });
          }
        } else {
          // 基本类型
          updateProxyValue(model, currentPath, value, {
            createPath: true,
            forceUpdate: true,
          });
          console.log(`更新路径: ${currentPath}`);
        }
      };

      Object.entries(updates).forEach(([key, value]) => {
        processUpdate(key, value);
      });
    },
    setValue: (...args) => updateProxyValue(model, ...args),
    reset: () => {
      overlayApis.reset();
      replaceTarget(model, defaultValues);
      forceUpdate();
    },
    useWatch: (...args) => useWatch(contextProps, ...args),
    watch: (...args) => watch(contextProps, ...args),
    unWatch: (...args) => unWatch(contextProps, ...args),
    useSubscribe: (...args) => useSubscribe(contextProps, ...args),
  }).current;

  return extraApis;
};
