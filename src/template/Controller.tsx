import React from 'react';

export type ControlProps = {
  children: any;
  value?: any;
  useEvtentsValue?: boolean;
  onChange?: (...args: any[]) => void;
  onBlur?: (...args: any[]) => void;
  getFormatValue?: (...args: any) => any;
  formatValue?: (...args: any) => any;
};

export const Controller: React.FC<ControlProps> = ({
  children,
  value,
  ...rests
}) => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      ...rests,
      value: child?.props?.value ?? value,
      onChange(...args: any[]) {
        rests?.onChange?.(...args);
        child?.props?.onChange?.(...args);
      },
      onBlur(...args: any[]) {
        rests?.onBlur?.(...args);
        child?.props?.onBlur?.(...args);
      },
    });
  });
};

export default Controller;
