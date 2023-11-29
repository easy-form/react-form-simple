import { useLocation } from 'dumi';
import { useLocalSet } from './useLocalSet';

export const useRouteHome = () => {
  const location = useLocation();
  const { baseSet } = useLocalSet();

  const isHome = baseSet.includes(location?.pathname);

  return { isHome };
};
