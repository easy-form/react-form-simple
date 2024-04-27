import React from 'react';
import type { GlobalProps } from 'react-form-simple/types/form';

export type ControlProps = {
  children: any;
  otherProps: Record<string, any>;
  deep?: boolean;
} & GlobalProps.GetContentOptions;

export const Controller: React.FC<ControlProps> = ({
  children,
  attrs,
  otherProps,
  deep = true,
  ...rests
}) => {
  const { value, onChange, onBlur, ...restAttrs } = attrs;

  const cloneElement = (element: any) =>
    React.cloneElement(element, {
      ...otherProps,
      ...restAttrs,
      ...element?.props,
      value: element?.props?.value ?? value,
      ...rests,
      onChange(e: any, ...args: any[]) {
        onChange?.(e, ...args);
        element?.props?.onChange?.(e, ...args);
      },
      onBlur(e: any, ...args: any[]) {
        onBlur?.();
        element?.props?.onBlur?.(e, ...args);
      },
    });
  if (deep) {
    return React.Children.map(children, cloneElement);
  }
  return React.isValidElement(children) ? cloneElement(children) : children;
};

export default Controller;
