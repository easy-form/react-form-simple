import { cloneDeep } from 'lodash';
import { useEffect } from 'react';
import { UseWatchNamespace } from 'react-form-simple/types/use';
import { useControllerRef } from 'react-form-simple/use/useControllerRef';
import { isEqual } from 'react-form-simple/utils/util';

export function usePrivateWatch<T>(options: { modal: T }) {
  const { modal } = options;
  const watchInstance = useControllerRef({
    datas: [] as Array<UseWatchNamespace.WatchChangeCb>,
    ret: new WeakMap(),
    set(cb: UseWatchNamespace.WatchChangeCb) {
      watchInstance.datas.push(cb);
    },
    get() {
      return watchInstance.datas;
    },
    emit(options?: UseWatchNamespace.WatchChangeCbProps) {
      const watchFuns = watchInstance.get();
      watchFuns.forEach((fun) => void fun?.(options));
    },
  });

  const useWatch: UseWatchNamespace.UseWatch<T> = (subScripeFun, cb) => {
    useEffect(() => {
      const _subScripeFun = subScripeFun;
      const _cb = cb;
      let preRets: UseWatchNamespace.SubscripeFunReturnType = null;

      const fun: UseWatchNamespace.WatchChangeCb = (options) => {
        const { isInitEmit = false } = options || {};

        const ret = _subScripeFun?.({ modal });

        if (isInitEmit) {
          preRets = cloneDeep(ret);
          return;
        }
        const _isEqual = isEqual(ret, preRets);
        if (!_isEqual) {
          _cb?.(ret, preRets);
        }
        preRets = cloneDeep(ret);
      };
      watchInstance.set(fun);
    }, []);
  };

  useEffect(() => {
    setTimeout(() => {
      watchInstance.emit({ isInitEmit: true });
    });
  }, []);
  return { useWatch, watchInstance };
}

export default usePrivateWatch;
