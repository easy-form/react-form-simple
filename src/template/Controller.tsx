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
  ...rests
}) => {
  const { value, onChange, onBlur, ...restAttrs } = attrs;
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      ...otherProps,
      ...restAttrs,
      ...child?.props,
      value: child?.props?.value ?? value,
      ...rests,
      onChange(e: any, ...args: any[]) {
        onChange?.(e, ...args);
        child?.props?.onChange?.(e, ...args);
      },
      onBlur(e: any, ...args: any[]) {
        onBlur?.();
        child?.props?.onBlur?.(e, ...args);
      },
    });
  });
};

export default Controller;
