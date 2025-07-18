import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import {
  useFormItemContentController,
  type UseFormItemContentController,
} from 'react-form-simple/use/useFormItemContentController';
import { getCssInClasses, isMeaningful } from 'react-form-simple/utils/util';
import { CSSTransition } from 'react-transition-group';

import type { GlobalProps } from 'react-form-simple/types/form';

import type { Subscribe } from 'react-form-simple/utils/subscribe';
import '../style/form.css';

type FormItemProps = GlobalProps.FormItemProps;

export const RequireIndicator = React.memo(
  (props: { requireIndicator?: any }) => {
    const { requireIndicator } = props;
    if (!requireIndicator) return null;
    if (requireIndicator === true) {
      return <span className="react-form-simple-indicator">*</span>;
    }
    return requireIndicator;
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
  const errorRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    subscribe.on('onErr', (error: string) => {
      const isError = isMeaningful(error);
      setHasError(isError);
      if (isError) {
        setErrorMessage(error);
      }
    });
  }, []);

  const classes = getCssInClasses(
    ['react-form-simple-error-txt', errorClassName as string],
    errorStyle,
  );

  return (
    <>
      <CSSTransition
        in={hasError}
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
          ref={errorRef}
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

export const HaveStyleFormItemWrap = (
  props: FormItemProps & {
    componentNode: {
      labelNode: ReactNode;
      contentNode: ReactNode;
      errorTextNode: ReactNode;
    };
  },
) => {
  const {
    componentNode,
    formItemClassName,
    labelPosition = 'row',
    formItemStyle,
    contentStyle,
    contentClassName,
    fullWidth,
  } = props;

  const { labelNode, contentNode, errorTextNode } = componentNode;

  const { labelPositionMap } = useRef({
    labelPositionMap: new Map([
      ['row', 'react-form-simple-form-item-row'],
      ['top', 'react-form-simple-form-item-top'],
    ]),
  }).current;

  const classes = getCssInClasses(
    [
      'react-form-simple-form-item',
      formItemClassName as string,
      labelPositionMap.get(labelPosition as string) as string,
    ],
    formItemStyle,
  );

  const contentClasses = getCssInClasses(
    ['react-form-simple-content', contentClassName as string],
    contentStyle,
  );

  return (
    <div
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
      {labelNode}
      <div className={contentClasses}>
        {contentNode}
        {errorTextNode}
      </div>
    </div>
  );
};
