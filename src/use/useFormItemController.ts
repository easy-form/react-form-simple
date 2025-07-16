import { useCallback, useEffect, useMemo } from 'react';

import { Subscribe } from 'react-form-simple/utils/subscribe';

import { debounce, isArray } from 'lodash';
import {
  StaticVaildUtils,
  VaildUtils,
} from 'react-form-simple/driver/VaildDriver';
import { GlobalProps } from 'react-form-simple/types/form';
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

  const state = useMemo(() => {
    const uid = getUuid();
    const subscribe = new Subscribe();
    const vaildUtil = new VaildUtils({
      defaultValue,
      onError(msg) {
        subscribe.emit('onErr', msg);
      },
    });

    return {
      uid,
      subscribe,
      vaildUtil,
      bindId,
      rules: rules || [],
      errorText: '',
    };
  }, []);

  useMemo(() => {
    state.bindId = bindId;
    state.rules = rules || [];
    state.vaildUtil.updateRule(rules);
    state.vaildUtil.updateBindId(bindId);
  }, [bindId, rules, state]);

  useEffect(() => {
    return () => {
      state.vaildUtil.clearValidate();
    };
  }, [state]);

  const onErrorDebounce = useMemo(
    () => (onError && typeof onError === 'function' ? debounce(onError) : null),
    [onError],
  );

  const validate = useCallback(() => {
    let shareErrRet = null;
    if (isMeaningful(state.errorText)) {
      return state.errorText;
    }
    const _rules = state.vaildUtil.getRules();
    if (isArray(_rules)) {
      for (let r of _rules) {
        const errResult = state.vaildUtil.vaild(r);
        state.subscribe.emit('onErr', errResult);
        onErrorDebounce?.(errResult as string, state.bindId);
        if (isMeaningful(errResult)) {
          shareErrRet = errResult;
          break;
        }
      }
    }
    return shareErrRet;
  }, [state, onErrorDebounce]);

  const triggers = useMemo(() => {
    const triggerList = StaticVaildUtils.getTriggers(trigger);
    return {
      get: () => triggerList,
      change: () => {
        if (triggerList.includes('change')) {
          validate();
        }
      },
      blur: () => {
        if (triggerList.includes('blur')) {
          validate();
        }
      },
    };
  }, [trigger, validate]);

  const apis = useMemo(
    () => ({
      validate() {
        const ret = validate();
        return isMeaningful(ret) ? Promise.reject(ret) : Promise.resolve();
      },
      reset() {
        if (contextProps?.reset) {
          contextProps.reset({
            bindId: state.bindId,
            uid: state.uid,
            value: defaultValue,
          });
        }
        if (defaultValueSymbol !== defaultValue) {
          state.vaildUtil.reset();
        }
      },
      clearValidate() {
        state.errorText = '';
        state.vaildUtil.clearValidate();
      },
      removeValidator() {
        state.vaildUtil.clearValidate();
        state.vaildUtil.removeValidator();
      },
      reapplyValidator() {
        state.vaildUtil.updateRule(state.rules);
      },
      setError(err: any) {
        state.errorText = err;
        state.subscribe.emit('onErr', err);
      },
      setValue(value: any) {
        state.subscribe.emit('update', value);
      },
    }),
    [state, contextProps, defaultValue, validate],
  );

  return {
    apis,
    exportEffectApis: apis,
    triggers,
    globalDatas: state,
    bindId: state.bindId,
  };
};

export default useFormItemController;
