import { useRef, useState } from 'react';
import type { Apis, UseFormReturnType } from 'react-form-simple';
import {
  replaceTarget,
  updateProxyValue,
} from 'react-form-simple/utils/controller';

export const useFormExtraApis = <T>({
  model,
  overlayApis,
  defaultValues,
}: {
  model: T;
  overlayApis: Apis.FormApis;
  defaultValues: T;
}) => {
  const [, setState] = useState({});
  const extraApis = useRef<
    Pick<UseFormReturnType, 'setState' | 'setValues' | 'setValue' | 'reset'>
  >({
    setState() {
      setState({});
    },
    setValues(values) {
      replaceTarget(model, values);
    },
    setValue(bindId, message) {
      updateProxyValue(model, bindId, message);
    },
    reset() {
      overlayApis.reset();
      replaceTarget(model, defaultValues);
    },
  }).current;

  return extraApis;
};
