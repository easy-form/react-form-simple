import { useCallback, useEffect, useMemo } from 'react';

import { Subscribe } from 'react-form-simple/utils/subscribe';

import { debounce, isArray } from 'lodash';
import {
  StaticValidationUtils,
  ValidationUtils,
} from 'react-form-simple/driver/ValidDriver';
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
    const validationUtil = new ValidationUtils({
      defaultValue,
      onError(msg) {
        subscribe.emit('onErr', msg);
      },
    });

    return {
      uid,
      subscribe,
      validationUtil,
      bindId,
      rules: rules || [],
      errorText: '',
    };
  }, []);

  useMemo(() => {
    state.bindId = bindId;
    state.rules = rules || [];
    state.validationUtil.updateRule(rules);
    state.validationUtil.updateBindId(bindId);
  }, [bindId, rules, state]);

  useEffect(() => {
    return () => {
      state.validationUtil.clearValidate();
    };
  }, [state]);

  const onErrorDebounce = useMemo(
    () => (onError && typeof onError === 'function' ? debounce(onError) : null),
    [onError],
  );

  const validate = useCallback(() => {
    let validationError = null;
    if (isMeaningful(state.errorText)) {
      return state.errorText;
    }
    const validationRules = state.validationUtil.getRules();
    if (isArray(validationRules)) {
      for (let rule of validationRules) {
        const errResult = state.validationUtil.validate(rule);
        state.subscribe.emit('onErr', errResult);
        onErrorDebounce?.(errResult as string, state.bindId);
        if (isMeaningful(errResult)) {
          validationError = errResult;
          break;
        }
      }
    }
    return validationError;
  }, [state, onErrorDebounce]);

  const triggers = useMemo(() => {
    const triggerList = StaticValidationUtils.getTriggers(trigger);
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
          state.validationUtil.reset();
        }
      },
      clearValidate() {
        state.errorText = '';
        state.validationUtil.clearValidate();
      },
      removeValidator() {
        state.validationUtil.clearValidate();
        state.validationUtil.removeValidator();
      },
      reapplyValidator() {
        state.validationUtil.updateRule(state.rules);
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
