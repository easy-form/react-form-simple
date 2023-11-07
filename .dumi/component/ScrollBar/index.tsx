import React from 'react';
import SimpleBar from 'simplebar-react';

import 'simplebar-react/dist/simplebar.min.css';
import './index.less';

export function ScrollBar(props: any) {
  const { children, noEvent, ...rests } = props;
  const mouses = noEvent
    ? {}
    : {
        onMouseEnter() {
          document.body.style.overflow = 'hidden';
          document.body.style.paddingRight = '17px';
        },
        onMouseLeave() {
          document.body.style.overflow = 'auto';
          document.body.style.paddingRight = '0px';
        },
      };
  return (
    <SimpleBar className="dumi-default-simpleBar" {...rests} {...mouses}>
      {children}
    </SimpleBar>
  );
}

export default ScrollBar;
