import { Zoom } from '@components/Animation';
import React from 'react';

export const TextWrap = ({
  style,
  title,
  content,
}: {
  style?: React.CSSProperties;
  title?: React.ReactNode;
  content?: React.ReactNode;
}) => {
  return (
    <Zoom>
      <div
        style={{
          marginBottom: '120px',
          textAlign: 'center',
          width: '50%',
          marginLeft: 'auto',
          marginRight: 'auto',
          ...style,
        }}
      >
        <div style={{ fontSize: '45px', fontWeight: 'bold' }}>{title}</div>
        <div style={{ marginTop: '50px', fontSize: '20px', lineHeight: '2' }}>
          {content}
        </div>
      </div>
    </Zoom>
  );
};

export default TextWrap;
