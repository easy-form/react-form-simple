import type { CSSInterpolation } from '@emotion/css';
/**
 * List all HTML tags
 */
export type JSXIntrinsicElementsKeyOf = keyof JSX.IntrinsicElements;

/**
 * Default HTML tag type
 */
export type DefaultTagName = 'div';

/**
 * The Box component props, which receives all HTML tags whose properties are determined by the HTML passed in
 */
export type BoxProps<T extends JSXIntrinsicElementsKeyOf = DefaultTagName> = {
  /**
   * Label style, support css in js writing
   */
  sx?: CSSInterpolation;
  /**
   * The type of label to render
   */
  component?: T;
  /**
   * Rendered child node content
   */
  children?: React.ReactNode;
} & JSX.IntrinsicElements[T];
