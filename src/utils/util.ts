import type { CSSInterpolation } from '@emotion/css';
import { css } from '@emotion/css';
import { isArray } from 'lodash';
import type { GlobalProps, TagType } from 'react-form-simple/types/form';

export const isMeaningful = (val: any) =>
  val !== '' && val !== undefined && val !== null;

export const getUuid = () => {
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] as bigint & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';

  const uuid = s.join('');
  return uuid;
};

export const isEqual = (sourceValue: any, targetValue: any): boolean => {
  if (
    typeof sourceValue !== 'object' ||
    sourceValue === null ||
    targetValue === null
  ) {
    const bool = String(sourceValue) === String(targetValue);

    return bool;
  }

  if (typeof sourceValue !== typeof targetValue) {
    return false;
  }

  if (Array.isArray(sourceValue) && Array.isArray(targetValue)) {
    if (sourceValue.length !== targetValue.length) {
      return false;
    }

    return !sourceValue?.some((v, i) => !isEqual(v, targetValue[i]));
  }

  const keys1 = Object.keys(sourceValue);
  const keys2 = Object.keys(targetValue);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (!keys2.includes(key) || !isEqual(sourceValue[key], targetValue[key])) {
      return false;
    }
  }
  return true;
};

export const isObject = (val: unknown) =>
  Object.prototype.toString.call(val) === '[object Object]';

export const isObjectOrArray = (value: unknown) =>
  isObject(value) || isArray(value);

export const isCheckBox = (e: any, tagType?: TagType) =>
  tagType === 'checkbox' || e?.target?.type === 'checkbox';

export const getEventCbValue = (
  e: any,
  tagType?: TagType,
  formatChangeValue?: GlobalProps.FormShareProps['formatChangeValue'],
) => {
  const _formatChangeValue =
    typeof formatChangeValue === 'function'
      ? formatChangeValue
      : (e: any) =>
          isCheckBox(e, tagType) ? e?.target?.checked : e?.target?.value;

  return _formatChangeValue(e);
};

export const getCssInClasses = (classes: string[], sx?: CSSInterpolation) =>
  [...classes, css(sx)].filter((c) => isMeaningful(c)).join(' ');
