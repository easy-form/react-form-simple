import { useEffect, useMemo } from 'react';
import { FormUtil } from 'react-form-simple/utils/FormUtil';
import useControllerRef from './useControllerRef';

import { Subscribe } from 'react-form-simple/utils/subscribe';

import { debounce, isArray, isObject } from 'lodash';
import { GlobalProps, GlobalRules } from 'react-form-simple/types/form';
import { getUuid, isMeaningful } from 'react-form-simple/utils/util';

const initialValueSymbol = Symbol('initialValue');

export const useFormItemController = (
  options: {} & GlobalProps.FormItemProps,
) => {
  const {
    onError,
    initialValue = initialValueSymbol,
    trigger = 'change',
    bindId,
    rules,
    contextProps,
  } = options;

  const globalDatas = useControllerRef({
    uid: getUuid(),
    subscribe: new Subscribe(),
    formUtil: new FormUtil({
      initialValue,
      onErr(err) {
        globalDatas.subscribe.emit('onErr', err);
      },
    }),
    bindId,
    rules: [] as GlobalRules.Rules,
  });

  globalDatas.bindId = bindId;
  globalDatas.rules = rules;

  const { formUtil, subscribe } = globalDatas;

  useEffect(() => {
    formUtil.replace({ trigger, bindId });
  }, [trigger, bindId]);

  useEffect(() => {
    if (bindId) {
      formUtil.setRules(rules);
    }
  }, [rules, bindId]);

  useEffect(() => {
    return () => {
      formUtil.clearValidate();
    };
  }, []);

  const onErrorDebounce: Function | null = useMemo(
    () => (onError && typeof onError === 'function' ? debounce(onError) : null),
    [onError],
  );

  const vailds = useMemo(
    () => ({
      each() {
        let shareErrRet = null;
        const _rules = formUtil.getRules();
        if (isArray(_rules)) {
          for (let r of _rules) {
            const errRet = vailds.vaild(r);
            if (isMeaningful(errRet)) {
              shareErrRet = errRet;
              break;
            }
          }
        }
        return shareErrRet;
      },
      vaild(rule: GlobalRules.RulesSingle) {
        const modal = formUtil.getModal();
        const bindId = globalDatas.bindId;
        const noneVaildErr =
          !isMeaningful(modal) || !isObject(modal) || !isMeaningful(bindId);
        if (noneVaildErr) {
          formUtil.updateErr('');
          return true;
        }
        const errResult = formUtil.validate(rule);
        onErrorDebounce?.(errResult, bindId);
        return errResult;
      },
    }),
    [onErrorDebounce],
  );

  const triggers = useMemo(
    () => ({
      get() {
        return formUtil.getTriggers(trigger);
      },
      change() {
        const t = triggers.get();
        t.includes('change') && vailds.each();
      },
      blur() {
        const t = triggers.get();
        t.includes('blur') && vailds.each();
      },
    }),
    [trigger],
  );

  const exportApis = useControllerRef({
    validate() {
      const ret = vailds.each();
      return isMeaningful(ret) ? Promise.reject(ret) : Promise.resolve();
    },
    reset() {
      if (initialValueSymbol !== initialValue) {
        formUtil.reset();
        contextProps?.reset?.({
          bindId: globalDatas.bindId,
          uid: globalDatas.uid,
          value: initialValue,
        });
      }
    },
    clearValidate() {
      formUtil.clearValidate();
    },
    removeValidator() {
      formUtil.clearValidate();
      formUtil.removeValidator();
    },
    reapplyValidator() {
      formUtil.setRules(globalDatas.rules);
    },
    setError(err: any) {
      formUtil.updateErr(err);
    },
    setValue(value: any) {
      subscribe.emit('update', value);
    },
  });

  return {
    apis: exportApis,
    triggers,
    globalDatas,
    bindId: globalDatas.bindId,
  };
};

export default useFormItemController;
