import { useCallback, useEffect, useRef, useState } from 'react';
import type { UseSubscribeNamespace } from 'react-form-simple';
import { RequiredContextType } from 'react-form-simple/driver/ObserverDriver/type';

export const useSubscribe = <T>(
  contextProps: RequiredContextType<T>,
  subscribeFun: UseSubscribeNamespace.SubscribeFunType<T, any>,
) => {
  const symbolKey = useRef(Symbol('symbol')).current;
  const subscribeFunRef = useRef(subscribeFun);

  // Update ref every time but don't trigger re-registration
  subscribeFunRef.current = subscribeFun;

  const [state, setState] = useState<any>(
    subscribeFun({ model: contextProps.model }),
  );

  const { observerFactory } = contextProps;

  // Use useCallback to stabilize callback function reference
  const stableCallback = useCallback((value: any) => {
    setState(value);
  }, []);

  useEffect(() => {
    // Use wrapper function to get latest subscribeFun
    const wrappedSubscribeFun = (args: any) => subscribeFunRef.current(args);

    observerFactory.subscribeManager.register(
      symbolKey,
      contextProps,
      wrappedSubscribeFun,
      stableCallback,
    );

    return () => {
      observerFactory.subscribeManager.destroy(symbolKey);
    };
  }, [observerFactory.subscribeManager]); // Only depend on observerFactory.subscribeManager
  return state;
};
// export const subscribe = <T>(
//   contextProps: RequiredContextType<T>,
//   sub: UseSubscribeNamespace.SubscribeFunType<T, any>,
//   key: string,
// ) => {
//   const { observerFactory } = contextProps;
//   const _sub = (...args: any) => sub(...args);
//   observerFactory.subscribeManager.register(key, contextProps, sub, _sub);

//   return _sub()
// };
