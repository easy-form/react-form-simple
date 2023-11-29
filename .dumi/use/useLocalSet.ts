import { useSiteData } from 'dumi';

export function useLocalSet() {
  const { locales } = useSiteData();

  const baseSet = locales.map((v: any) => v.base);
  return {
    baseSet,
  };
}

export default useLocalSet;
