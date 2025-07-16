import { useCallback, useEffect, useRef, useState } from 'react';
import {
  getProxyValue,
  updateProxyValue,
} from 'react-form-simple/driver/ControllerDriver';
import { VaildUtils } from 'react-form-simple/driver/VaildDriver';
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
  vaildUtil: VaildUtils;
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
    vaildUtil,
    getContent,
    subscribe,
    onChange,
    onBlur,
    readOnly,
    apis,
    formatChangeValue,
    contextProps,
  } = options;

  const preBindId = useRef(bindId);

  // 简化的forceUpdate实现
  const [, setTick] = useState(0);
  const forceUpdate = useCallback(() => setTick((prev) => prev + 1), []);

  // 使用共享模型而不是独立的modelValue
  const sharedModel = contextProps?.model;

  const modelValue = useRef(
    sharedModel || convertStringToObject(bindId, initialValue),
  );

  // 如果有共享模型，使用共享模型
  if (sharedModel) {
    modelValue.current = sharedModel;
  }

  vaildUtil.updateModel(modelValue.current);

  const isError = useRef(false);
  const errorMessage = useRef('');

  const isInitSubscribeEvent = useRef(true);

  if (isInitSubscribeEvent.current) {
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
    isInitSubscribeEvent.current = false;
  }

  useEffect(() => {
    if (bindId !== preBindId.current) {
      if (!sharedModel) {
        modelValue.current = convertStringToObject(bindId, initialValue);
      }
      preBindId.current = bindId;
      forceUpdate();
    }
  }, [bindId, forceUpdate, sharedModel]);

  const methods = {
    set(value: any) {
      if (sharedModel) {
        // 如果使用共享模型，直接更新共享模型

        // 尝试直接触发Proxy的set trap
        const path = preBindId.current as string;
        const pathParts = path.split('.');

        if (pathParts.length === 3 && pathParts[0] === 'array') {
          // 特殊处理数组路径: array.0.itemValue
          const arrayIndex = parseInt(pathParts[1]);
          const property = pathParts[2];

          // 直接设置数组元素的属性
          if (sharedModel.array && sharedModel.array[arrayIndex]) {
            sharedModel.array[arrayIndex][property] = value;
          }

          // 手动触发观察者通知
          if (contextProps?.observerFactory?.watchManager) {
            contextProps.observerFactory.watchManager.notify(sharedModel, path);
          }
        } else {
          // 其他路径使用updateProxyValue
          updateProxyValue(sharedModel, path, value);
        }
      } else {
        // 否则更新本地模型
        updateProxyValue(
          modelValue.current,
          preBindId.current as string,
          value,
        );
      }
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
      isError: isError.current,
      errorMessage: errorMessage.current,
      ...apis,
    }) || null;

  return {
    renderContent,
  };
}

export default useFormItemContentController;
