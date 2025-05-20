import { useCallback, useRef } from 'react';
import type { Apis, GlobalProps } from 'react-form-simple';
import { isMeaningful } from 'react-form-simple/utils/util';

export const useContextApi = () => {
  const uidWithFormItemAPIs = useRef(
    new Map<GlobalProps.BindId, GlobalProps.ApiEffectOptions>(),
  ).current;

  const formatStringToArray = (value: Apis.ValidateBindIds) =>
    typeof value === 'string'
      ? [value]
      : (value as (number | string | boolean)[]);

  const executeMethodFromApis = useCallback(
    (
      bindId: Apis.ValidateBindIds,
      methodName: keyof GlobalProps.ApiEffectOptions,
      ...args: any[]
    ) => {
      if (!isMeaningful(bindId)) {
        Array.from(uidWithFormItemAPIs.values()).forEach(
          (api) => void api?.[methodName]?.(),
        );
        return;
      }
      const _bindIds = formatStringToArray(bindId);
      _bindIds?.forEach((bindId) => {
        const options = uidWithFormItemAPIs.get(bindId);
        options?.[methodName]?.(...args);
      });
    },
    [],
  );

  const contextProps = useRef<GlobalProps.ContextProps>({
    apiEffect(option) {
      uidWithFormItemAPIs.set(option.bindId, option);
    },
    destroy({ bindId }) {
      uidWithFormItemAPIs.delete(bindId);
    },
  }).current;

  const overlayApis = useRef<Apis.FormApis>({
    validate(names) {
      const _apiValues = Array.from(uidWithFormItemAPIs.values());
      if (isMeaningful(names)) {
        const bindIds = formatStringToArray(names);

        const _validateFunc = _apiValues.filter((api) =>
          bindIds.includes(api.bindId),
        );
        return Promise.all(_validateFunc.map(({ validate }) => validate()));
      }

      return Promise.all(_apiValues.map(({ validate }) => validate()));
    },
    reset() {
      Array.from(uidWithFormItemAPIs.values()).forEach(
        ({ reset }) => void reset?.(),
      );
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
    setValue() {},
    setError(bindId, message) {
      executeMethodFromApis(bindId, 'setError', message);
    },
  }).current;

  return { contextProps, overlayApis, uidWithFormItemAPIs };
};

export default useContextApi;
