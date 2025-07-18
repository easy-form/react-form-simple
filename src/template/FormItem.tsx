import React, { useEffect, useImperativeHandle } from 'react';

import type { Apis, GlobalProps } from 'react-form-simple/types/form';

import {
  FormItemContent,
  FormItemErrorTxt,
  FormItemLabel,
  HaveStyleFormItemWrap,
} from './FormItemAtom';

import { useDataContext } from './DataProvide';

import { useFormItemController } from '../use/useFormItemController';

export const FormItem = React.forwardRef<
  Apis.FormItemApis,
  GlobalProps.FormItemProps
>((props, ref) => {
  const { ...restContextProps } = useDataContext();

  const { children, getContent, ...restProps } = props;

  const assigns = { ...restContextProps, ...restProps };

  const {
    labelPosition,
    labelWidth,
    labelStyle,
    labelClassName,
    errorStyle,
    errorClassName,
    bindId,
    label,
    customErrTips = false,
    requireIndicator,
    contextProps,
    readOnly,
    readOnlyText,
    defaultValue,
    initialValue,
    formatChangeValue,
    noStyle,
  } = assigns;

  const { mounted, destroy, apiEffect, updated } = contextProps || {};

  const { apis, exportEffectApis, triggers, globalDatas } =
    useFormItemController({
      ...assigns,
    });

  const {
    uid,
    subscribe,
    validationUtil,
    bindId: internalBindId,
  } = globalDatas;

  // const { setError } = apis;

  useEffect(() => {
    mounted?.({ uid, bindId: internalBindId });
    return () => {
      destroy?.({ uid, bindId: internalBindId });
      subscribe.clear();
    };
  }, []);

  useEffect(() => {
    apiEffect?.({
      uid,
      bindId,
      ...exportEffectApis,
    });
  }, [...Object.values(exportEffectApis), bindId]);

  useImperativeHandle(ref, () => ({
    ...apis,
  }));

  const renderFormItemErrorTxt = !customErrTips && (
    <FormItemErrorTxt
      bindId={bindId}
      // off={() => setError('')}
      errorStyle={errorStyle}
      errorClassName={errorClassName}
      subscribe={globalDatas.subscribe}
    />
  );

  const renderFormItemLabel = (
    <FormItemLabel
      label={label}
      labelWidth={labelWidth}
      labelStyle={labelStyle}
      labelPosition={labelPosition}
      labelClassName={labelClassName}
      requireIndicator={requireIndicator}
      readOnly={readOnly}
    />
  );

  const contentProps = {
    readOnly,
    readOnlyText,
    bindId,
    subscribe,
    contextProps,
    defaultValue,
    apis,
    formatChangeValue,
    initialValue,
  };

  const renderFormItemContent = (
    <FormItemContent
      {...contentProps}
      onChange={(value) => {
        updated?.({ uid, bindId, value });
        triggers.change();
      }}
      onBlur={() => {
        triggers.blur();
      }}
      validationUtil={validationUtil}
      getContent={(...args) => getContent?.(...args) || children}
    />
  );

  const renderNoStyleWrap = (
    <>
      {renderFormItemLabel}
      {renderFormItemContent}
      {renderFormItemErrorTxt}
    </>
  );

  return noStyle ? (
    renderNoStyleWrap
  ) : (
    <HaveStyleFormItemWrap
      {...assigns}
      componentNode={{
        labelNode: renderFormItemLabel,
        contentNode: renderFormItemContent,
        errorTextNode: renderFormItemErrorTxt,
      }}
    />
  );
});

export default FormItem;
