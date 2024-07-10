import { useEffect, useRef } from 'react';
import { UseWatchNamespace } from 'react-form-simple';
import type {
  CallbackType,
  KeyType,
  RequiredContextType,
  SubscripeFunType,
} from 'react-form-simple/driver/ObserverDriver/type';

export const useWatch = <T>(
  contextProps: RequiredContextType<T>,
  subscribeFun: SubscripeFunType<T>,
  cb: CallbackType,
  // options?: UseWatchNamespace.WatchOptions,
) => {
  // const { observerFactory } = contextProps;
  // observerFactory.watchManager.register(
  //   symbolKey,
  //   contextProps,
  //   subscribeFun,
  //   cb,
  //   options,
  // );

  const symbolKey = useRef(Symbol('symbol')).current;

  const { unWatch } = watch(contextProps, subscribeFun, cb, symbolKey);

  useEffect(() => {
    return () => {
      unWatch();
      // observerFactory.watchManager.destroy(symbolKey);
    };
  }, []);
};

export const unWatch = <T>(
  contextProps: RequiredContextType<T>,
  key: KeyType,
) => {
  contextProps.observerFactory.watchManager.destroy(key);
};

export const watch = <T>(
  contextProps: RequiredContextType<T>,
  subscribeFun: SubscripeFunType<T>,
  cb: UseWatchNamespace.CallbackType,
  key: KeyType,
) => {
  const { observerFactory } = contextProps;
  observerFactory.watchManager.register(key, contextProps, subscribeFun, cb);

  return {
    unWatch: () => unWatch(contextProps, key),
  };
};
