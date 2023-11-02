import React from 'react';
import { default as MdLabel, type MdLabelProps } from './MdLabel';
import './Mda.less';

const Mda = (props: MdLabelProps & { path: string }) => {
  const { children, path, ...rests } = props;
  return (
    <MdLabel {...rests} style={{ ...rests?.style }} className="mdh-label">
      <a href={path} className="mda">
        {children}
      </a>
    </MdLabel>
  );
};

export default Mda;
