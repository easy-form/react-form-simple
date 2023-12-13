import React from 'react';

export default function Title({
  children,
  style,
}: {
  children: any;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        fontSize: '38px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '25px',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
