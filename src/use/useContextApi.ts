import { useCallback, useMemo } from 'react';
import type { Apis, GlobalProps } from 'react-form-simple';
import { isMeaningful } from 'react-form-simple/utils/util';

export const useContextApi = () => {
  const globalDatas = useMemo(
    () => ({
      apis: new Map<string, GlobalProps.ApiEffectOptions>(),
      bindIdMapUid: new Map(),
    }),
    [],
  );

  const { apis, bindIdMapUid } = globalDatas;

  const getUid = useCallback(
    (bindId: any) => bindIdMapUid.get(bindId),
    [bindIdMapUid],
  );

  const formarStringToArray = useCallback(
    (value: Apis.ValidateBindIds) =>
      typeof value === 'string'
        ? [value]
        : (value as (number | string | boolean)[]),
    [],
  );

  const executeMethodFromApis = useCallback(
    (
      bindId: Apis.ValidateBindIds,
      methodName: keyof GlobalProps.ApiEffectOptions,
      ...args: any[]
    ) => {
      if (!isMeaningful(bindId)) {
        Array.from(apis.values()).forEach((api) => void api?.[methodName]?.());
        return;
      }
      const _bindIds = formarStringToArray(bindId);
      _bindIds?.forEach((bindId) => {
        const uid = getUid(bindId);
        const api = apis.get(uid);
        api?.[methodName]?.(...args);
      });
    },
    [apis, formarStringToArray, getUid],
  );

  const contextProps = useMemo<GlobalProps.ContextProps>(
    () => ({
      apiEffect(option) {
        const { uid, bindId } = option;
        apis.set(uid, option);
        bindIdMapUid.set(bindId, uid);
      },
      destroy({ uid, bindId }) {
        apis.delete(uid);
        bindIdMapUid.delete(bindId);
      },
    }),
    [apis, bindIdMapUid],
  );

  const overlayApis = useMemo<Apis.FormApis>(
    () => ({
      validate(names) {
        const _apiValues = Array.from(apis.values());
        if (isMeaningful(names)) {
          const _bindIds = formarStringToArray(names);
          const _uid = _bindIds.map((bindId) => bindIdMapUid.get(bindId));
          const _validateFuns = _apiValues.filter((api) =>
            _uid.includes(api.uid),
          );
          return Promise.all(_validateFuns.map(({ validate }) => validate()));
        }

        return Promise.all(_apiValues.map(({ validate }) => validate()));
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
        const api = apis.get(getUid(bindId));
        if (api) {
          api.setValue(value);
        }
      },
      setError(bindId, message) {
        executeMethodFromApis(bindId, 'setError', message);
      },
    }),
    [apis, bindIdMapUid, executeMethodFromApis, formarStringToArray, getUid],
  );

  return { globalDatas, contextProps, overlayApis };
};

export default useContextApi;
