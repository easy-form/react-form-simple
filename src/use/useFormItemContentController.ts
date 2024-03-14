import { useEffect, useRef } from 'react';
import { Apis, GlobalProps } from 'react-form-simple/types/form';
import { useController } from 'react-form-simple/use/useController';
import useForceUpdate from 'react-form-simple/use/useForceUpdate';
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
    initialValue,
    formUtil,
    getContent,
    subscribe,
    onChange,
    onBlur,
    readOnly,
    apis,
    formatChangeValue,
  } = options;

  const preBindId = useRef(bindId);

  const forceUpdate = useForceUpdate();

  const modelValue = useRef(convertStringToObject(bindId, initialValue));

  formUtil.replace({ model: modelValue.current });

  const status = useController({ isError: false });

  const { isError } = status;

  const isInitSubscribeEvent = useRef(true);

  if (isInitSubscribeEvent.current) {
    subscribe.on('update', (value) => {
      methods.set(value);
    });
    subscribe.on('onErr', (value) => {
      status.isError = isMeaningful(value);
    });
    isInitSubscribeEvent.current = false;
  }

  useEffect(() => {
    if (bindId !== preBindId.current) {
      modelValue.current = convertStringToObject(bindId, initialValue);
      preBindId.current = bindId;
      forceUpdate();
    }
  }, [bindId]);

  const methods = {
    set(value: any) {
      updateProxyValue(modelValue.current, preBindId.current as string, value);
      forceUpdate();
    },
  };

  const value = getProxyValue(modelValue.current, preBindId.current) ?? '';

  const renderContent =
    getContent?.({
      model: modelValue.current,
      bindId: preBindId.current as string,
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
