import React, { useEffect, useImperativeHandle, useMemo } from 'react';
import useControllerRef from 'react-form-simple/use/useController';
import { Box } from './Box';

import type { Apis, GlobalProps } from 'react-form-simple/types/form';

import {
  FormItemContent,
  FormItemErrorTxt,
  FormItemLabel,
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
    errorStyle,
    labelPosition = 'row',
    labelWidth,
    labelStyle,
    formItemStyle,
    contentStyle,
    fullWidth,
    bindId,
    label,
    customErrTips = false,
    requireIndicator,
    contextProps,
    readOnly,
    readOnlyText,
    defaultValue,
    formatChangeValue,
  } = assigns;

  const { mounted, destroy, apiEffect, updated } = contextProps || {};

  const { apis, triggers, globalDatas } = useFormItemController({
    ...assigns,
  });

  const { uid, subscribe, formUtil, bindId: _bindId } = globalDatas;

  // const { setError } = apis;

  const { labelPositionMap } = useControllerRef({
    labelPositionMap: new Map([
      ['row', 'control-form-item_row'],
      ['top', 'control-form-item_top'],
    ]),
  });

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
      ...apis,
    });
  }, [...Object.values(apis), bindId]);

  useImperativeHandle(ref, () => ({
    ...apis,
  }));

  const formItemClass = useMemo(
    () => ['control-form-item', labelPositionMap.get(labelPosition)],
    [labelPosition],
  );

  const renderFormItemErrorTxt = useMemo(
    () =>
      !customErrTips && (
        <FormItemErrorTxt
          bindId={bindId}
          // off={() => setError('')}
          errorStyle={errorStyle}
          subscribe={globalDatas.subscribe}
        />
      ),
    [customErrTips, errorStyle],
  );

  const renderFormItemLabel = useMemo(
    () => (
      <FormItemLabel
        label={label}
        labelWidth={labelWidth}
        labelStyle={labelStyle}
        labelPosition={labelPosition}
        requireIndicator={requireIndicator}
        readOnly={readOnly}
      />
    ),
    [label, labelWidth, labelStyle, labelPosition, requireIndicator, readOnly],
  );

  const contentProps = {
    contentStyle,
    readOnly,
    readOnlyText,
    bindId,
    subscribe,
    contextProps,
    defaultValue,
    apis,
    formatChangeValue,
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

  return (
    <Box
      key={uid}
      className={formItemClass?.join(' ')}
      sx={{
        marginBottom: '25px',
        ...(fullWidth
          ? {
              width: '100%',
              minWidth: '100%',
            }
          : {}),
        '&.control-form-item_row': {
          display: 'inline-flex',
          alignItems: 'center',
          marginRight: '20px',
        },
        ...formItemStyle,
      }}
    >
      {renderFormItemLabel}
      <Box
        sx={{
          position: 'relative',
          flex: 1,
        }}
      >
        {renderFormItemContent}
        {renderFormItemErrorTxt}
      </Box>
    </Box>
  );
});

export default FormItem;
