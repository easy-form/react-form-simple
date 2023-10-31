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

// const useFormItemRef = () => {
//   const formItems = useControllerRef({
//     datas: {} as Record<string, Apis.FormItemApis>,
//     get() {
//       return formItems.datas;
//     },
//     set(key: string, ref: Apis.FormItemApis) {
//       formItems.datas[key] = ref;
//     },
//     setValue(key: string, value: any) {
//       const f = formItems.get();
//       f?.[key]?.setValue?.(value);
//     },
//   });
//   return { formItems };
// };

export const useRender = (config: UseRenderNamespace.UseRenderOptions) => {
  // const { formItems } = useFormItemRef();

  const { globalDatas } = config;

  const { bindIdApis } = globalDatas;

  const render: UseFormNamespace.UseFormReturnType['render'] = (
    bindId,
    singleConfig,
  ) => {
    Reflect;
    const mergeConfig = { ...config, ...singleConfig };
    const { key, modal, contextProps, defineProps, ...rests } = mergeConfig;

    const defaultValue = getProxyValue(modal, bindId);

    const otherProps: Record<string, any> = {};
    if (isMeaningful(key)) {
      otherProps['key'] = key;
    }

    return (reactNode) => {
      return (
        <FormItem
          defaultValue={defaultValue}
          bindId={bindId}
          contextProps={contextProps}
          getContent={(options) => {
            const { attrs } = options;
            const controllerprops = {
              attrs,
              ...defineProps?.(options),
            } as GlobalProps.GetContentOptions;
            return <Controller {...controllerprops}>{reactNode}</Controller>;
          }}
          {...otherProps}
          {...rests}
          // ref={(ref) => {
          //   formItems.set(bindId, ref as Apis.FormItemApis);
          // }}
        />
      );
    };
  };

  const exportMethods = useControllerRef({
    set(key: string, value: any) {
      bindIdApis.get(key)?.setValue(value);
      // formItems.setValue(key, value);
    },
  });

  return { render, ...exportMethods };
};
