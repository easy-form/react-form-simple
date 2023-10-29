import React, { useEffect, useMemo, useRef } from 'react';
import {
  useFormItemContentController,
  type UseFormItemContentController,
} from 'react-form-simple/use/useFormItemContentController';
import { isMeaningful } from 'react-form-simple/utils/util';
import { CSSTransition } from 'react-transition-group';
import { Box } from './Box';

import type { GlobalProps } from 'react-form-simple/types/form';

import useController from 'react-form-simple/use/useController';
import type { Subscribe } from 'react-form-simple/utils/subscribe';
import '../style/form.less';

type FormItemProps = GlobalProps.FormItemProps;

export const RequireIndicator = React.memo(
  (props: { requireIndicator?: FormItemProps['requireIndicator'] }) => {
    const { requireIndicator } = props;
    const renderRequireIndicator =
      requireIndicator === true ? (
        <Box
          sx={{
            position: 'relative',
            color: 'red',
            fontSize: '13px',
            top: 0,
            marginLeft: '2px',
          }}
          component="span"
        >
          *
        </Box>
      ) : null;
    return renderRequireIndicator;
  },
);

type FormItemLabelProps = Pick<
  FormItemProps,
  | 'label'
  | 'labelWidth'
  | 'labelStyle'
  | 'requireIndicator'
  | 'labelPosition'
  | 'readOnly'
>;

export const FormItemLabel = React.memo((props: FormItemLabelProps) => {
  const {
    label,
    labelWidth,
    labelStyle,
    requireIndicator,
    labelPosition = 'row',
    readOnly,
  } = props;

  const labelStyleMemo = useMemo(
    () => ({
      row: {
        marginRight: '10px',
      },
      top: {
        marginBottom: '6px',
      },
    }),
    [labelPosition],
  );

  return isMeaningful(label) ? (
    <Box
      sx={{
        width: labelWidth,
        position: 'relative',
        fontSize: '14px',
        ...labelStyleMemo[labelPosition],
        ...labelStyle,
      }}
      className="label-wrap"
    >
      {label}
      {!readOnly && <RequireIndicator requireIndicator={requireIndicator} />}
    </Box>
  ) : null;
});

type FormItemErrorTxtProps = {
  errorSx?: FormItemProps['errorSx'];
  off?: () => void;
  subscribe: InstanceType<typeof Subscribe>;
};

export const FormItemErrorTxt = React.memo((props: FormItemErrorTxtProps) => {
  const { errorSx, off, subscribe } = props;
  const errRef = useRef(null);

  const datas = useController({ errorMessage: '', err: false });

  useEffect(() => {
    subscribe.on('onErr', (err: string) => {
      Reflect.set(datas, 'err', isMeaningful(err));
      if (datas.err) {
        Reflect.set(datas, 'errorMessage', err);
      }
    });
  }, []);

  const isErr = useMemo(() => datas.err, [datas.err]);
  const { errorMessage } = datas;

  return (
    <>
      <CSSTransition
        in={isErr}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onExited={() => {
          off?.();
        }}
      >
        <Box
          ref={errRef}
          sx={{
            color: '#f56c6c',
            position: 'absolute',
            fontSize: '14px',
            ...errorSx,
          }}
        >
          {errorMessage}
        </Box>
      </CSSTransition>
    </>
  );
});

export const FormItemContent = (props: UseFormItemContentController) => {
  const { readOnly, readOnlyText } = props;

  const { renderContent } = useFormItemContentController({
    ...props,
  });

  return readOnly && isMeaningful(readOnlyText) ? readOnlyText : renderContent;
};
