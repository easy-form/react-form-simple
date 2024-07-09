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
    setValues: (...args) => replaceTarget(model, ...args),
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
