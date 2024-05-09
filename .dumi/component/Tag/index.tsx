import React, { type FC, type ReactNode } from 'react';
import './index.less';

const Tag: FC<{ children: ReactNode; style?: React.CSSProperties }> = (
  props,
) => (
  <span className="react-form-simple-tag" style={props.style}>
    {props.children}
  </span>
);

export default Tag;
