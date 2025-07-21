import { useCallback, useEffect, useRef, useState } from 'react';
import {
  getProxyValue,
  updateProxyValue,
} from 'react-form-simple/driver/ControllerDriver';
import { ValidationUtils } from 'react-form-simple/driver/ValidDriver';
import { Apis, GlobalProps } from 'react-form-simple/types/form';
import { Subscribe } from 'react-form-simple/utils/subscribe';
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
  validationUtil: ValidationUtils;
  subscribe: InstanceType<typeof Subscribe>;
  onChange: (...args: any[]) => void;
  onBlur: () => void;
  apis: Apis.FormItemApis;
  contextProps?: { model?: Record<string, any>; observerFactory?: any };
}

export function useFormItemContentController(
  options: UseFormItemContentController,
) {
  const {
    bindId,
    initialValue,
    validationUtil,
    getContent,
    subscribe,
    onChange,
    onBlur,
    readOnly,
    apis,
    formatChangeValue,
    contextProps,
  } = options;

  const previousBindId = useRef(bindId);

  // Simplified forceUpdate implementation
  const [, setTick] = useState(0);
  const forceUpdate = useCallback(() => setTick((prev) => prev + 1), []);

  // Use shared model instead of independent modelValue
  const sharedModel = contextProps?.model;

  const modelValue = useRef(
    sharedModel || convertStringToObject(bindId, initialValue),
  );

  // If there's a shared model, use shared model
  if (sharedModel) {
    modelValue.current = sharedModel;
  }

  validationUtil.updateModel(modelValue.current);

  const isError = useRef(false);
  const errorMessage = useRef('');

  const isSubscribeEventInitialized = useRef(true);

  if (isSubscribeEventInitialized.current) {
    subscribe.on('update', (value) => {
      methods.set(value);
    });
    subscribe.on('onErr', (value) => {
      if (errorMessage.current !== value) {
        forceUpdate();
      }
      errorMessage.current = value;
      isError.current = isMeaningful(value);
    });
    isSubscribeEventInitialized.current = false;
  }

  useEffect(() => {
    if (bindId !== previousBindId.current) {
      if (!sharedModel) {
        modelValue.current = convertStringToObject(bindId, initialValue);
      }
      previousBindId.current = bindId;
      forceUpdate();
    }
  }, [bindId, forceUpdate, sharedModel]);

  const methods = {
    set(value: any) {
      if (sharedModel) {
        // If using shared model, update shared model directly

        // Try to directly trigger Proxy's set trap
        const path = previousBindId.current as string;
        const pathParts = path.split('.');

        if (pathParts.length === 3 && pathParts[0] === 'array') {
          // Special handling for array paths: array.0.itemValue
          const arrayIndex = parseInt(pathParts[1]);
          const property = pathParts[2];

          // Directly set array element property
          if (sharedModel.array && sharedModel.array[arrayIndex]) {
            sharedModel.array[arrayIndex][property] = value;
          }

          // Manually trigger observer notification
          if (contextProps?.observerFactory?.watchManager) {
            contextProps.observerFactory.watchManager.notify(sharedModel, path);
          }
        } else {
          // Use updateProxyValue for other paths
          updateProxyValue(sharedModel, path, value);
        }
      } else {
        // Otherwise update local model
        updateProxyValue(
          modelValue.current,
          previousBindId.current as string,
          value,
        );
      }
      forceUpdate();
    },
  };

  const value = getProxyValue(modelValue.current, previousBindId.current) ?? '';

  const renderContent =
    getContent?.({
      model: modelValue.current,
      bindId: previousBindId.current as string,
      attrs: {
        readOnly,
        onChange: (e, tagType) => {
          const formattedValue = getEventCbValue(e, tagType, formatChangeValue);
          methods.set(formattedValue);
          onChange?.(formattedValue);
        },
        onBlur: () => {
          onBlur?.();
        },
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
