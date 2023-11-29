import { useLocale } from 'dumi';
import { useRef } from 'react';

export function useMenu() {
  const { id } = useLocale();
  const menusENKey = useRef([
    'docs/intro/advanced',
    'docs/intro/introduce',
    'docs/intro/api',
  ]).current;

  const menusKey = [...menusENKey, ...menusENKey.map((v) => `${v}.${id}`)];

  return { menusKey };
}

export default useMenu;
