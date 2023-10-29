import React from 'react';
import './index.less';

export default function Button({
  children,
  className,
  ...rests
}: { children: React.ReactNode } & JSX.IntrinsicElements['button']) {
  return (
    <button
      {...rests}
      className={`button ${[className].filter(Boolean).join(' ')}`}
    >
      {children}
    </button>
  );
}
