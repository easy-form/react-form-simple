import React, { type FC, type ReactNode } from 'react';
import './index.less';

const Tag: FC<{ children: ReactNode }> = (props) => (
  <span className="react-form-simple-tag">{props.children}</span>
);

export default Tag;
