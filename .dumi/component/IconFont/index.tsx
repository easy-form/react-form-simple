import React from 'react';

const iconfontHref = '//at.alicdn.com/t/c/font_4298426_gftuoqa6jhe.js';

const scriptId = 'react-form-simple-icon-iconfont';

export interface IconProps extends Omit<React.HTMLProps<'svg'>, 'size'> {
  name: string;
  color?: string;
  size?: string | number;
  style?: React.CSSProperties;
}

export function IconFont(props: IconProps) {
  const { name, size, color, style: styleProp, ...restProps } = props;

  React.useLayoutEffect(() => {
    const iconfontScript = document.getElementById(scriptId);
    if (!iconfontScript || iconfontScript.id !== scriptId) {
      const script = document.createElement('script');
      script.src = iconfontHref;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  function isNumeric(size: any) {
    const numericValue = parseFloat(size);
    return !isNaN(numericValue) ? `${numericValue}px` : size;
  }
  const style = {
    fill: color || 'currentcolor',
    width: isNumeric(size) || '1em',
    height: isNumeric(size) || '1em',
    ...styleProp,
    overflow: 'hidden',
  };

  const iconSymbol = `#icon-${name}`;

  return (
    <svg style={style} {...(restProps as any)} aria-hidden="true">
      <use xlinkHref={iconSymbol} />
    </svg>
  );
}

export default IconFont;
