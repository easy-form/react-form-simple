import { useRef, useState } from 'react';
import type { UseFormReturnType } from 'react-form-simple';
import {
  replaceTarget,
  updateProxyValue,
} from 'react-form-simple/utils/controller';

export const useFormExtraApis = <T>({ model }: { model: T }) => {
  const [, setState] = useState({});
  const extraApis = useRef<
    Pick<UseFormReturnType, 'setState' | 'setValues' | 'setValue'>
  >({
    setState() {
      setState({});
    },
    setValues(values) {
      replaceTarget(model as object, values);
    },
    setValue(bindId, message) {
      updateProxyValue(model, bindId, message);
    },
  }).current;

  return extraApis;
};
