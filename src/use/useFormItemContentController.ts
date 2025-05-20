import { useRef, useState } from 'react';
import { updateProxyValue } from 'react-form-simple/driver/ControllerDriver';
import { ValidUtils } from 'react-form-simple/driver/ValidDriver';
import { Apis, GlobalProps } from 'react-form-simple/types/form';
import useForceUpdate from 'react-form-simple/use/useForceUpdate';
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
  validUtil: ValidUtils;
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
    validUtil,
    getContent,
    subscribe,
    onChange,
    onBlur,
    readOnly,
    apis,
    formatChangeValue,
    contextProps,
  } = options;

  const [value, setValue] = useState(initialValue);

  const forceUpdate = useForceUpdate();

  const { model } = contextProps || {};

  validUtil.updateValue(value);

  const isError = useRef(false);
  const errorMessage = useRef('');

  const isInitSubscribeEvent = useRef(true);

  if (isInitSubscribeEvent.current) {
    subscribe.on('update', (value: any) => {
      methods.set(value);
    });
    subscribe.on('onErr', (value) => {
      if (errorMessage.current !== value) {
        forceUpdate(false);
      }
      errorMessage.current = value;
      isError.current = isMeaningful(value);
    });
    isInitSubscribeEvent.current = false;
  }

  const methods = {
    set(v: any) {
      if (Object.is(v, value)) return;
      setValue(v);
    },
  };

  const renderContent =
    getContent?.({
      model: convertStringToObject(bindId, value),
      bindId,
      attrs: {
        readOnly,
        onChange: (e, tagType) => {
          const _value = getEventCbValue(e, tagType, formatChangeValue);
          updateProxyValue(model, bindId, _value);
          setValue(_value);
          onChange?.(_value);
        },
        onBlur,
        value,
        checked: Boolean(value),
      },
      isError: isError.current,
      errorMessage: errorMessage.current,
      ...apis,
    }) || null;

  return {
    renderContent,
  };
}

export default useFormItemContentController;
