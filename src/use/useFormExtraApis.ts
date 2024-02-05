import { useRef } from 'react';
import type { Apis, UseFormReturnType } from 'react-form-simple';
import {
  replaceTarget,
  updateProxyValue,
} from 'react-form-simple/utils/controller';
import useForceUpdate from './useForceUpdate';

export const useFormExtraApis = <T>({
  model,
  overlayApis,
  defaultValues,
}: {
  model: T;
  overlayApis: Apis.FormApis;
  defaultValues: T;
}) => {
  const forceUpdate = useForceUpdate();
  const extraApis = useRef<
    Pick<
      UseFormReturnType,
      'setState' | 'setValues' | 'setValue' | 'reset' | 'forceUpdate'
    >
  >({
    setState() {
      forceUpdate();
    },
    forceUpdate,
    setValues(values) {
      replaceTarget(model, values);
    },
    setValue(bindId, message) {
      updateProxyValue(model, bindId, message);
    },
    reset() {
      overlayApis.reset();
      replaceTarget(model, defaultValues);
      forceUpdate();
    },
  }).current;

  return extraApis;
};
