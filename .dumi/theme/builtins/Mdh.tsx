import React from 'react';

import { IconFont } from '../../component/IconFont';
import { default as MdLabel, type MdLabelProps } from './MdLabel';
import './mdh.less';

const Mdh = (props: MdLabelProps) => {
  const { children, ...rests } = props;
  return (
    <MdLabel
      {...rests}
      style={{ display: 'inline-block', ...rests?.style }}
      className="mdh-label"
    >
      {children}
      <IconFont name="code" size={30} className="icon" />
    </MdLabel>
  );
};

export default Mdh;
