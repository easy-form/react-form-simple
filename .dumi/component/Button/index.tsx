import React from 'react';
import './index.less';

export default function Button({
  children,
  className,
  plain,
  ...rests
}: {
  children: React.ReactNode;
  plain?: boolean;
} & JSX.IntrinsicElements['button']) {
  return (
    <button
      {...rests}
      className={`button ${[className, plain ? 'plain-button' : '']
        .filter(Boolean)
        .join(' ')}`}
    >
      {children}
    </button>
  );
}
