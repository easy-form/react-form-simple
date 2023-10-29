import { useLocation } from 'dumi';

export const useRouteHome = () => {
  const location = useLocation();

  const isHome = location?.pathname === '/';

  return { isHome };
};
