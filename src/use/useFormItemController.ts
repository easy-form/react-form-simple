import { useEffect, useMemo, useRef } from 'react';

import { Subscribe } from 'react-form-simple/utils/subscribe';

import { debounce, isArray } from 'lodash';
import {
  StaticVaildUtils,
  VaildUtils,
} from 'react-form-simple/driver/VaildDriver';
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
    vaildUtil: new VaildUtils({
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

  const { vaildUtil, subscribe } = globalDatas;

  vaildUtil.updateRule(rules);

  useEffect(() => {
    vaildUtil.updateBindId(bindId);
  }, [bindId]);

  useEffect(() => {
    return () => {
      vaildUtil.clearValidate();
    };
  }, []);

  const onErrorDebounce = useMemo<typeof onError | null>(
    () => (onError && typeof onError === 'function' ? debounce(onError) : null),
    [onError],
  );

  const vailds = useMemo(
    () => ({
      each() {
        let shareErrRet = null;
        if (isMeaningful(globalDatas.errorText)) {
          return globalDatas.errorText;
        }
        const _rules = vaildUtil.getRules();
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
        const bindId = globalDatas.bindId;

        const errResult = vaildUtil.vaild(rule);

        globalDatas.subscribe.emit('onErr', errResult);

        onErrorDebounce?.(errResult as string, bindId);
        return errResult;
      },
    }),
    [onErrorDebounce],
  );

  const triggers = useMemo(
    () => ({
      get() {
        return StaticVaildUtils.getTriggers(trigger);
      },
      change() {
        const t = triggers.get();
        if (t.includes('change')) {
          vailds.each();
        }
      },
      blur() {
        const t = triggers.get();
        if (t.includes('blur')) {
          vailds.each();
        }
      },
    }),
    [trigger],
  );

  const exportApis = useRef({
    validate() {
      const ret = vailds.each();
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
        vaildUtil.reset();
      }
    },
    clearValidate() {
      globalDatas.errorText = '';
      vaildUtil.clearValidate();
    },
    removeValidator() {
      vaildUtil.clearValidate();
      vaildUtil.removeValidator();
    },
    reapplyValidator() {
      vaildUtil.updateRule(globalDatas.rules);
    },
    setError(err: any) {
      globalDatas.errorText = err;
      globalDatas.subscribe.emit('onErr', err);
    },
    setValue(value: any) {
      subscribe.emit('update', value);
    },
  }).current;

  const exportEffectApis = useRef({
    ...exportApis,
  }).current;

  return {
    apis: exportApis,
    exportEffectApis,
    triggers,
    globalDatas,
    bindId: globalDatas.bindId,
  };
};

export default useFormItemController;
