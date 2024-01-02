import React, { useEffect, useImperativeHandle } from 'react';
import useControllerRef from 'react-form-simple/use/useController';

import type { Apis, GlobalProps } from 'react-form-simple/types/form';

import {
  FormItemContent,
  FormItemErrorTxt,
  FormItemLabel,
} from './FormItemAtom';

import { useDataContext } from './DataProvide';

import { getCssInClasses } from 'react-form-simple/utils/util';
import '../style/form.css';
import { useFormItemController } from '../use/useFormItemController';

export const FormItem = React.forwardRef<
  Apis.FormItemApis,
  GlobalProps.FormItemProps
>((props, ref) => {
  const { ...restContextProps } = useDataContext();

  const { children, getContent, ...restProps } = props;

  const assigns = { ...restContextProps, ...restProps };

  const {
    labelPosition = 'row',
    labelWidth,
    labelStyle,
    labelClassName,
    errorStyle,
    errorClassName,
    formItemStyle,
    formItemClassName,
    contentStyle,
    contentClassName,
    fullWidth,
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
  } = assigns;

  const { mounted, destroy, apiEffect, updated } = contextProps || {};

  const { apis, exportEffectApis, triggers, globalDatas } =
    useFormItemController({
      ...assigns,
    });

  const { uid, subscribe, formUtil, bindId: _bindId } = globalDatas;

  // const { setError } = apis;

  useEffect(() => {
    mounted?.({ uid, bindId: _bindId });
    return () => {
      destroy?.({ uid, bindId: _bindId });
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
      formUtil={formUtil}
      getContent={(...args) => getContent?.(...args) || children}
    />
  );

  const { labelPositionMap } = useControllerRef({
    labelPositionMap: new Map([
      ['row', 'react-form-simple-form-item-row'],
      ['top', 'react-form-simple-form-item-top'],
    ]),
  });

  const classes = getCssInClasses(
    [
      'react-form-simple-form-item',
      formItemClassName as string,
      labelPositionMap.get(labelPosition) as string,
    ],
    formItemStyle,
  );

  const contentClasses = getCssInClasses(
    ['react-form-simple-content', contentClassName as string],
    contentStyle,
  );

  return (
    <div
      key={uid}
      className={classes}
      style={{
        ...(fullWidth
          ? {
              width: '100%',
              minWidth: '100%',
            }
          : {}),
      }}
    >
      {renderFormItemLabel}
      <div className={contentClasses}>
        {renderFormItemContent}
        {renderFormItemErrorTxt}
      </div>
    </div>
  );
});

export default FormItem;
