import React from 'react';
import type { GlobalProps } from 'react-form-simple/types/form';

export type ControlProps = {
  children: any;
  otherProps: Record<string, any>;
} & GlobalProps.GetContentOptions;

export const Controller: React.FC<ControlProps> = ({
  children,
  attrs,
  otherProps,
  ...restProps
}) => {
  const { value, onChange, onBlur, ...remainingAttrs } = attrs;

  const cloneElement = (element: any) =>
    React.cloneElement(element, {
      ...otherProps,
      ...remainingAttrs,
      ...element?.props,
      value: element?.props?.value ?? value,
      ...restProps,
      onChange(e: any, ...args: any[]) {
        onChange?.(e, ...args);
        element?.props?.onChange?.(e, ...args);
      },
      onBlur(e: any, ...args: any[]) {
        onBlur?.();
        element?.props?.onBlur?.(e, ...args);
      },
    });

  return React.isValidElement(children) ? cloneElement(children) : children;
};

export default Controller;
