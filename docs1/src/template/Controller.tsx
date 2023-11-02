import React from 'react';
import type { GlobalProps } from 'react-form-simple/types/form';

export type ControlProps = {
  children: any;
} & GlobalProps.GetContentOptions;

export const Controller: React.FC<ControlProps> = ({
  children,
  attrs,
  ...rests
}) => {
  const { value, onChange, onBlur, ...restAttrs } = attrs;
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      value: child?.props?.value ?? value,
      onChange(e: any, ...args: any[]) {
        onChange?.(e, ...args);
        child?.props?.onChange?.(e, ...args);
      },
      onBlur(e: any, ...args: any[]) {
        onBlur?.();
        child?.props?.onBlur?.(e, ...args);
      },
      ...restAttrs,
      ...rests,
      ...child?.props,
    });
  });
};

export default Controller;
