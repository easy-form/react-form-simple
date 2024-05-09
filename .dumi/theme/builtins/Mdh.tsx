import React from 'react';

import { IconFont } from '../../component/IconFont';
import Tag from '../../component/Tag';
import { default as MdLabel, type MdLabelProps } from './MdLabel';
import './mdh.less';

const Mdh = (props: MdLabelProps & { version?: string }) => {
  const { children, version = '1.1.0', ...rests } = props;
  return (
    <MdLabel
      {...rests}
      style={{ display: 'inline-block', ...rests?.style }}
      className="mdh-label"
    >
      {children}
      <IconFont name="code" size={30} className="icon" />
      {version && (
        <div style={{ position: 'absolute', right: -85, top: -15 }}>
          <Tag style={{ padding: '2px', display: 'inline' }}>{version}+</Tag>
        </div>
      )}
    </MdLabel>
  );
};

export default Mdh;
