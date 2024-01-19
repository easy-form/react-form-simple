import React, { useEffect, useMemo, useRef } from 'react';
import {
  useFormItemContentController,
  type UseFormItemContentController,
} from 'react-form-simple/use/useFormItemContentController';
import { getCssInClasses, isMeaningful } from 'react-form-simple/utils/util';
import { CSSTransition } from 'react-transition-group';

import type { GlobalProps } from 'react-form-simple/types/form';

import useController from 'react-form-simple/use/useController';
import type { Subscribe } from 'react-form-simple/utils/subscribe';
import '../style/form.css';

type FormItemProps = GlobalProps.FormItemProps;

export const RequireIndicator = React.memo(
  (props: { requireIndicator?: FormItemProps['requireIndicator'] }) => {
    const { requireIndicator } = props;
    const renderRequireIndicator =
      requireIndicator === true ? (
        <span className="react-form-simple-indicator">*</span>
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
  | 'labelClassName'
>;

export const FormItemLabel = React.memo((props: FormItemLabelProps) => {
  const {
    label,
    labelWidth,
    labelStyle,
    labelClassName,
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

  const classes = getCssInClasses(
    ['label-wrap', labelClassName as string],
    labelStyle,
  );

  return isMeaningful(label) ? (
    <div
      style={{
        width: labelWidth,
        ...labelStyleMemo[labelPosition],
      }}
      className={classes}
    >
      {label}
      {!readOnly && <RequireIndicator requireIndicator={requireIndicator} />}
    </div>
  ) : null;
});

type FormItemErrorTxtProps = {
  errorStyle?: FormItemProps['errorStyle'];
  errorClassName?: FormItemProps['errorClassName'];
  subscribe: InstanceType<typeof Subscribe>;
  bindId: any;
};

export const FormItemErrorTxt = React.memo((props: FormItemErrorTxtProps) => {
  const { errorStyle, subscribe, bindId, errorClassName } = props;
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

  const classes = getCssInClasses(
    ['react-form-simple-error-txt', errorClassName as string],
    errorStyle,
  );

  return (
    <>
      <CSSTransition
        in={isErr}
        timeout={300}
        classNames="alert"
        unmountOnExit
        // onExited={() => {
        //   off?.();
        // }}
      >
        <div
          data-error-id={`${bindId}-${errorMessage}`}
          data-error-text={errorMessage}
          ref={errRef}
          className={classes}
        >
          {errorMessage}
        </div>
      </CSSTransition>
    </>
  );
});

export const FormItemContent = (props: UseFormItemContentController) => {
  const { readOnly, readOnlyText } = props;

  const { renderContent } = useFormItemContentController({
    ...props,
  });

  if (readOnly && isMeaningful(readOnlyText)) {
    if (typeof readOnlyText === 'function') {
      return <>{readOnlyText()}</>;
    }
    return <>{readOnlyText}</>;
  }
  return <>{renderContent}</>;
};
