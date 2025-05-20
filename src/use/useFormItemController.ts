import { useEffect, useMemo, useRef } from 'react';

import { Subscribe } from 'react-form-simple/utils/subscribe';

import { debounce, isArray } from 'lodash';
import {
  StaticValidUtils,
  ValidUtils,
} from 'react-form-simple/driver/ValidDriver';
import { GlobalProps, GlobalRules } from 'react-form-simple/types/form';
import { getUuid, isMeaningful } from 'react-form-simple/utils/util';

const defaultValueSymbol = Symbol('defaultValue');

export const useFormItemController = (options: GlobalProps.FormItemProps) => {
  const {
    onError,
    defaultValue = defaultValueSymbol,
    trigger = 'change',
    bindId,
    rules,
    contextProps,
  } = options;

  const globalDatas = useRef({
    uid: getUuid(),
    subscribe: new Subscribe(),
    validUtil: new ValidUtils({
      defaultValue,
      onError(msg) {
        globalDatas.subscribe.emit('onErr', msg);
      },
    }),
    bindId,
    rules: [] as GlobalRules.Rules,
    errorText: '',
  }).current;

  globalDatas.bindId = bindId;
  globalDatas.rules = rules;

  const { validUtil, subscribe } = globalDatas;

  validUtil.updateRule(rules);

  useEffect(() => {
    return () => validUtil.clearValidate();
  }, []);

  const onErrorDebounce = useMemo<typeof onError | null>(
    () => (onError && typeof onError === 'function' ? debounce(onError) : null),
    [onError],
  );

  const validates = useMemo(
    () => ({
      each() {
        let shareErrRet = null;
        if (isMeaningful(globalDatas.errorText)) {
          return globalDatas.errorText;
        }
        const _rules = validUtil.getRules();
        if (isArray(_rules)) {
          for (let r of _rules) {
            const errRet = validates.validate(r);
            if (isMeaningful(errRet)) {
              shareErrRet = errRet;
              break;
            }
          }
        }
        return shareErrRet;
      },
      validate(rule: GlobalRules.RulesSingle) {
        const bindId = globalDatas.bindId;

        const errResult = validUtil.validate(rule);

        globalDatas.subscribe.emit('onErr', errResult);

        onErrorDebounce?.(errResult as string, bindId);
        return errResult;
      },
    }),
    [onErrorDebounce],
  );

  const triggers = useMemo(
    () => ({
      get: () => StaticValidUtils.getTriggers(trigger),
      change: () => {
        if (triggers.get().includes('change')) {
          validates.each();
        }
      },
      blur: () => {
        if (triggers.get().includes('blur')) {
          validates.each();
        }
      },
    }),
    [trigger],
  );

  const exportApis = useMemo(
    () => ({
      validate() {
        const ret = validates.each();
        return isMeaningful(ret) ? Promise.reject(ret) : Promise.resolve();
      },
      reset() {
        if (contextProps?.reset) {
          contextProps?.reset?.({
            bindId: globalDatas.bindId,
            uid: globalDatas.uid,
            value: defaultValue,
          });
        }
        if (defaultValueSymbol !== defaultValue) {
          validUtil.reset();
        }
      },
      clearValidate() {
        globalDatas.errorText = '';
        validUtil.clearValidate();
      },
      removeValidator() {
        validUtil.clearValidate();
        validUtil.removeValidator();
      },
      reapplyValidator() {
        validUtil.updateRule(globalDatas.rules);
      },
      setError(err: any) {
        globalDatas.errorText = err;
        globalDatas.subscribe.emit('onErr', err);
      },
      setValue(value: any) {
        subscribe.emit('update', value);
      },
    }),
    [],
  );

  const exportEffectApis = useMemo(() => ({ ...exportApis }), []);

  return {
    apis: exportApis,
    exportEffectApis,
    triggers,
    globalDatas,
    bindId: globalDatas.bindId,
  };
};

export default useFormItemController;
