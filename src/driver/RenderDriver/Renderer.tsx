import React from 'react';
import type {
  GlobalProps,
  UseFormNamespace,
  UseRenderNamespace,
} from 'react-form-simple';
import { FormItem } from 'react-form-simple';
import { getProxyValue } from 'react-form-simple/driver/ControllerDriver';
import Controller from 'react-form-simple/template/Controller';

export const renderer = (
  bindId: any,
  renderComponent: UseFormNamespace.RenderReturnFnArgTypes,
  config: UseFormNamespace.RenderConfigType &
    UseRenderNamespace.UseRenderOptions,
) => {
  const { model, contextProps, defineProps, deep, ...rests } = config;

  const defaultValue = getProxyValue(rests.defaultValues, bindId);
  const value = getProxyValue(model, bindId);

  const isFunction = typeof renderComponent === 'function';

  const renderReactNodeFn = (options: GlobalProps.GetContentOptions) =>
    isFunction &&
    renderComponent({
      ...options,
      props: { ...defineProps?.(options) },
    });

  const renderReactNode = (options: GlobalProps.GetContentOptions) => {
    const { attrs } = options;
    const controllerprops = {
      attrs,
      ...defineProps?.(options),
    } as GlobalProps.GetContentOptions;
    return (
      <Controller
        {...controllerprops}
        otherProps={{
          'data-form-simple-test-id': bindId,
        }}
        deep={deep}
      >
        {renderComponent}
      </Controller>
    );
  };

  return (
    <FormItem
      defaultValue={defaultValue}
      initialValue={value}
      bindId={bindId}
      contextProps={contextProps}
      getContent={(options) =>
        isFunction ? renderReactNodeFn(options) : renderReactNode(options)
      }
      {...rests}
    />
  );
};

export default renderer;
