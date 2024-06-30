import React from 'react';
import '../../theme/builtins/SourceCode/theme.less';
import './index.less';
function Demo(props: { children: any; style?: React.CSSProperties }) {
  return (
    <div
      className="custom-demo"
      style={{
        boxShadow:
          '0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07)',
        padding: '22px 24px',
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}

export default Demo;
