import { useCallback, useEffect, useRef, useState } from 'react';
import type { UseSubscribeNamespace } from 'react-form-simple';
import { RequiredContextType } from 'react-form-simple/driver/ObserverDriver/type';

export const useSubscribe = <T>(
  contextProps: RequiredContextType<T>,
  subscribeFun: UseSubscribeNamespace.SubscribeFunType<T, any>,
) => {
  const symbolKey = useRef(Symbol('symbol')).current;
  const subscribeFunRef = useRef(subscribeFun);

  // 每次都更新 ref，但不触发重新注册
  subscribeFunRef.current = subscribeFun;

  const [state, setState] = useState<any>(
    subscribeFun({ model: contextProps.model }),
  );

  const { observerFactory } = contextProps;

  // 使用 useCallback 来稳定回调函数的引用
  const stableCallback = useCallback((value: any) => {
    setState(value);
  }, []);

  useEffect(() => {
    // 使用包装函数来获取最新的 subscribeFun
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
  }, [observerFactory.subscribeManager]); // 只依赖 observerFactory.subscribeManager
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
