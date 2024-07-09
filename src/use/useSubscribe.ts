import { cloneDeep } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import type { UseSubscribeNamespace } from 'react-form-simple';
import { RequiredContextType } from 'react-form-simple/driver/ObserverDriver/type';

export const useSubscribe = <T>(
  contextProps: RequiredContextType<T>,
  subscribeFun: UseSubscribeNamespace.SubscribeFunType<T, any>,
) => {
  const symbolKey = useRef(Symbol('symbol')).current;

  const [state, setState] = useState<any>(
    subscribeFun({ model: cloneDeep(contextProps.model) }),
  );

  const { observerFactory } = contextProps;

  observerFactory.subscribeManager.register(
    symbolKey,
    contextProps,
    subscribeFun,
    (value: any) => {
      setState(value);
    },
  );

  useEffect(() => {
    return () => {
      observerFactory.subscribeManager.destroy(symbolKey);
    };
  }, []);
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
