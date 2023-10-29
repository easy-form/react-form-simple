import React from 'react';

export interface MdLabelProps extends React.HtmlHTMLAttributes<any> {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  align?: React.CSSProperties['textAlign'];
  style?: React.CSSProperties;
}

const MdLabel = ({
  children,
  as: As = 'div',
  align = 'left',
  style,
  ...rests
}: MdLabelProps) => {
  const _style: React.CSSProperties = {
    textAlign: align,
  };
  return (
    <As style={{ ..._style, ...style }} {...rests}>
      {children}
    </As>
  );
};

export default MdLabel;
