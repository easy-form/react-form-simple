import React from 'react';
import { FormItem } from 'react-form-simple';
import { Controller } from 'react-form-simple/template/Controller';
import type { GlobalProps } from 'react-form-simple/types/form';
import type {
  UseFormNamespace,
  UseRenderNamespace,
} from 'react-form-simple/types/use';
import { getProxyValue } from 'react-form-simple/utils/controller';
import { isMeaningful } from 'react-form-simple/utils/util';
import useControllerRef from './useControllerRef';

export const useRender = (config: UseRenderNamespace.UseRenderOptions) => {
  const { globalDatas, defaultValues } = config;

  const { bindIdApis } = globalDatas;

  const render: UseFormNamespace.UseFormReturnType['render'] = (
    bindId,
    singleConfig,
  ) => {
    const mergeConfig = { ...config, ...singleConfig };
    const { key, model, contextProps, defineProps, ...rests } = mergeConfig;

    const defaultValue = getProxyValue(defaultValues, bindId);
    const value = getProxyValue(model, bindId);

    const otherProps: Record<string, any> = {};
    if (isMeaningful(key)) {
      otherProps['key'] = key;
      otherProps['data-form-simple-test-id'] = key;
    }

    return (reactNode) => {
      return (
        <FormItem
          defaultValue={defaultValue}
          initialValue={value}
          bindId={bindId}
          contextProps={contextProps}
          getContent={(options) => {
            const { attrs } = options;
            const controllerprops = {
              attrs,
              ...defineProps?.(options),
            } as GlobalProps.GetContentOptions;
            return (
              <Controller {...controllerprops} otherProps={otherProps}>
                {reactNode}
              </Controller>
            );
          }}
          {...otherProps}
          {...rests}
        />
      );
    };
  };

  const exportMethods = useControllerRef({
    set(key: string, value: any) {
      bindIdApis.get(key)?.setValue(value);
    },
  });

  return { render, ...exportMethods };
};
