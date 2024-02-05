import { useRef } from 'react';
import useForceUpdate from 'react-form-simple/use/useForceUpdate';
import { createControllerObserver } from 'react-form-simple/utils/controller';

export function useController<T extends Record<string, any>>(obj: T): T {
  const forceUpdate = useForceUpdate();
  const proxyStateRef = useRef(obj);

  const { proxyMap, rawMap } = useRef({
    proxyMap: new WeakMap(),
    rawMap: new WeakMap(),
  }).current;

  return createControllerObserver(
    proxyStateRef.current,
    () => {
      forceUpdate();
    },
    { proxyMap, rawMap },
  );
}

export default useController;
