import { useIntl, useLocale, useSiteData } from 'dumi';
import { useRef } from 'react';

import enUS from '../theme/locales/en-US.json';

export function useLocalFormat() {
  const intl = useIntl();

  const locals = useLocale();

  const { locales } = useSiteData();

  const exMethods = useRef({
    format({ id }: { id: keyof typeof enUS }) {
      const message = intl.formatMessage({ id });
      if (message === null || message === undefined || message === '') {
      }
      return message;
    },
    isLocalZH_CN() {
      return locals.id === 'zh-CN';
    },
    isDefaultLocal() {
      return locals.id === locales[0]?.id;
    },
  }).current;

  return {
    ...exMethods,
  };
}

export default useLocalFormat;
