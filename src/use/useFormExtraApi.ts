import { useCallback, useMemo, useState } from 'react';
import type { Apis, DefaultRecord, UseFormReturnType } from 'react-form-simple';
import {
  replaceTarget,
  updateProxyValue,
} from 'react-form-simple/driver/ControllerDriver';
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
  // 简化的forceUpdate实现
  const [, setTick] = useState(0);
  const forceUpdate = useCallback(() => setTick((prev) => prev + 1), []);

  const { model } = contextProps;

  // 简化API对象
  const extraApis = useMemo<ExtraApisType<T>>(
    () => ({
      setState: forceUpdate,
      forceUpdate,
      setValues: (...args) => {
        replaceTarget(model, ...args);
        // // 手动触发观察者通知
        // contextProps.observerFactory.subscribeManager.notify();
        // contextProps.observerFactory.watchManager.notify();
        // forceUpdate();
      },
      setValue: (...args) => {
        updateProxyValue(model, ...args);
      },
      reset: () => {
        overlayApis.reset();
        replaceTarget(model, defaultValues);
        // 手动触发观察者通知
        contextProps.observerFactory.subscribeManager.notify();
        contextProps.observerFactory.watchManager.notify();
        forceUpdate();
      },
      useWatch: (...args) => useWatch(contextProps, ...args),
      watch: (...args) => watch(contextProps, ...args),
      unWatch: (...args) => unWatch(contextProps, ...args),
      useSubscribe: (...args) => useSubscribe(contextProps, ...args),
    }),
    [forceUpdate, model, overlayApis, defaultValues, contextProps],
  );

  return extraApis;
};
