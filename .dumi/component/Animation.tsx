
import React from 'react';
import { ZoomProps, Zoom as ZoomReveal } from 'react-awesome-reveal';

export const Zoom = ({
  children,
  ...restProps
}: ZoomProps & { children: any }) => {
  return (
    <ZoomReveal triggerOnce {...restProps}>
      {children}
    </ZoomReveal>
  );
};

export default Zoom;
