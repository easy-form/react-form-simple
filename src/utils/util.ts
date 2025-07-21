import type { CSSInterpolation } from '@emotion/css';
import { css } from '@emotion/css';
import type { GlobalProps, TagType } from 'react-form-simple/types/form';

// Check if value is meaningful (not empty)
export const isMeaningful = (val: any): boolean =>
  val !== '' && val !== undefined && val !== null;

// Generate unique ID
export const getUuid = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// Deep comparison of two values for equality
export const isEqual = (a: any, b: any): boolean => {
  if (a === b) return true;

  if (a === null || b === null || a === undefined || b === undefined) {
    return a === b;
  }

  if (typeof a !== typeof b) return false;

  if (typeof a !== 'object') {
    return String(a) === String(b);
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((item, index) => isEqual(item, b[index]));
  }

  if (Array.isArray(a) || Array.isArray(b)) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  return keysA.every((key) => keysB.includes(key) && isEqual(a[key], b[key]));
};

// Check if it's a plain object
export const isObject = (val: unknown): val is Record<string, any> =>
  val !== null && typeof val === 'object' && !Array.isArray(val);

// Check if it's an object or array
export const isObjectOrArray = (value: unknown): boolean =>
  isObject(value) || Array.isArray(value);

// Check if it's a checkbox
export const isCheckBox = (e: any, tagType?: TagType): boolean =>
  tagType === 'checkbox' || e?.target?.type === 'checkbox';

// Get event callback value
export const getEventCbValue = (
  e: any,
  tagType?: TagType,
  formatChangeValue?: GlobalProps.FormShareProps['formatChangeValue'],
): any => {
  if (typeof formatChangeValue === 'function') {
    return formatChangeValue(e);
  }

  return isCheckBox(e, tagType) ? e?.target?.checked : e?.target?.value;
};

// Generate CSS class names
export const getCssInClasses = (
  classes: (string | undefined)[],
  sx?: CSSInterpolation,
): string => {
  const validClasses = classes.filter(isMeaningful);
  const cssClass = sx ? css(sx) : '';

  return [...validClasses, cssClass].filter(Boolean).join(' ');
};
