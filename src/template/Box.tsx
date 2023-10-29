import { css } from '@emotion/css';
import React, { forwardRef } from 'react';
import type {
  BoxProps,
  DefaultTagName,
  JSXIntrinsicElementsKeyOf,
} from 'react-form-simple/types/box';
import { isMeaningful } from 'react-form-simple/utils/util';

export const Box = forwardRef(
  <T extends JSXIntrinsicElementsKeyOf = DefaultTagName>(
    { children, sx, component = 'div' as T, ...restProps }: BoxProps<T>,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const { className, ...rest } = restProps;

    const getClassName = () =>
      [css(sx), className].filter((c) => isMeaningful(c)).join(' ');

    return React.createElement(
      component,
      { className: getClassName(), ref, ...rest },
      children,
    );
  },
);

export default Box;
