import { useCallback, useState } from 'react';
import { Apis, GlobalProps } from 'react-form-simple/types/form';
import { isMeaningful } from 'react-form-simple/utils/util';
import useControllerRef from './useControllerRef';

export const useContextApi = () => {
  const globalDatas = useControllerRef({
    apis: new Map(),
    bindIdApis: new Map(),
  });
  const { apis, bindIdApis } = globalDatas;

  const [, setState] = useState({});

  const executeMethodFromApis = useCallback(
    (bindId: Apis.ValidateBindIds, methodName: string, ...args: any[]) => {
      if (!isMeaningful(bindId)) {
        Array.from(apis.values()).forEach((api) => void api?.[methodName]?.());
        return;
      }
      const _bindIds =
        typeof bindId === 'string'
          ? [bindId]
          : (bindId as (number | string | boolean)[]);
      _bindIds?.forEach((bindId) => {
        const api = bindIdApis.get(bindId);
        api && api?.[methodName]?.(...args);
      });
    },
    [],
  );

  const contextProps = useControllerRef<GlobalProps.ContextProps>({
    apiEffect({ uid, bindId, ...rests }) {
      apis.set(uid, rests);
      bindIdApis.set(bindId, rests);
    },
    destory({ uid, bindId }) {
      apis.delete(uid);
      bindIdApis.delete(bindId);
    },
  });

  const overlayApis = useControllerRef<Apis.FormApis>({
    validate() {
      const validateFuns = Array.from(apis.values()).map(
        ({ validate }) => validate,
      );
      return Promise.all(validateFuns.map((fn) => fn?.()));
    },
    reset() {
      Array.from(apis.values()).forEach(({ reset }) => void reset?.());
    },
    clearValidate(bindId) {
      executeMethodFromApis(bindId, 'clearValidate');
    },
    removeValidator(bindId) {
      executeMethodFromApis(bindId, 'removeValidator');
    },
    reapplyValidator(bindId) {
      executeMethodFromApis(bindId, 'reapplyValidator');
    },
    setValue(bindId, value) {
      const api = bindIdApis.get(bindId);
      if (api) {
        api.setValue(value);
      }
    },
    setValues(values) {
      if (!values || typeof values !== 'object') return;
      Object.entries(values).forEach(([key, value]) => {
        overlayApis.setValue(key, value);
      });
    },
    setError(bindId, message) {
      executeMethodFromApis(bindId, 'setError', message);
    },
  });

  const useFormExtraApis = useControllerRef({
    setState() {
      setState({});
    },
  });

  return { globalDatas, contextProps, overlayApis, useFormExtraApis };
};

export default useContextApi;
