import { useEffect } from 'react';
import { Apis, GlobalProps } from 'react-form-simple/types/form';
import { useController } from 'react-form-simple/use/useController';
import { useControllerRef } from 'react-form-simple/use/useControllerRef';
import { FormUtil } from 'react-form-simple/utils/FormUtil';
import {
  getProxyValue,
  updateProxyValue,
} from 'react-form-simple/utils/controller';
import Subscribe from 'react-form-simple/utils/subscribe';
import { getEventCbValue, isMeaningful } from 'react-form-simple/utils/util';

const convertStringToObject = (
  inputString?: GlobalProps.BindId,
  lastValue: any = undefined,
) => {
  if (!inputString) return {};
  const keys: string[] = String(inputString).split('.');
  const result: Record<string, any> = {};

  keys.reduce(
    (currentLevel: Record<string, any>, key: string, index: number) => {
      currentLevel[key] = index === keys.length - 1 ? lastValue : {};
      return currentLevel[key];
    },
    result,
  );

  return result;
};

export interface UseFormItemContentController
  extends GlobalProps.FormItemProps {
  formUtil: InstanceType<typeof FormUtil>;
  subscribe: InstanceType<typeof Subscribe>;
  onChange: (...args: any[]) => void;
  onBlur: () => void;
  apis: Apis.FormItemApis;
}

export function useFormItemContentController(
  options: UseFormItemContentController,
) {
  const {
    bindId,
    defaultValue,
    formUtil,
    getContent,
    subscribe,
    onChange,
    onBlur,
    readOnly,
    apis,
    formatChangeValue,
  } = options;

  const _modal = useController({
    value: convertStringToObject(bindId, defaultValue),
  });

  const status = useController({ isError: false });

  const { isError } = status;

  const { value: modalValue } = _modal;

  useEffect(() => {
    subscribe.on('update', (value) => {
      methods.set(value);
    });
    subscribe.on('onErr', (value) => {
      status.isError = isMeaningful(value);
    });
  }, []);

  useEffect(() => {
    formUtil.replace({ modal: modalValue });
  }, [modalValue]);

  const methods = useControllerRef({
    set(value: any) {
      updateProxyValue(modalValue, bindId as string, value);
    },
  });

  const value = getProxyValue(modalValue, bindId) ?? '';

  const renderContent =
    getContent?.({
      modal: modalValue,
      bindId: bindId as string,
      attrs: {
        readOnly,
        onChange: (e, tagType) => {
          const _value = getEventCbValue(e, tagType, formatChangeValue);
          methods.set(_value);
          onChange?.(_value);
        },
        onBlur: () => {
          onBlur?.();
        },
        value,
        checked: Boolean(value),
      },
      isError,
      ...apis,
    }) || null;

  return {
    renderContent,
  };
}

export default useFormItemContentController;
