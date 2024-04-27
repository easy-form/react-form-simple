import { cloneDeep } from 'lodash';
import { useEffect, useRef } from 'react';
import { UseWatchNamespace } from 'react-form-simple/types/use';
import { useControllerRef } from 'react-form-simple/use/useControllerRef';
import { isEqual } from 'react-form-simple/utils/util';

export function usePrivateWatch<T>(options: { model: T }) {
  const { model } = options;
  const watchInstance = useControllerRef({
    datas: [] as Array<{ cb: UseWatchNamespace.WatchChangeCb; key: Symbol }>,
    ret: new WeakMap(),
    set(cb: UseWatchNamespace.WatchChangeCb, key: Symbol) {
      const haveIndex = this.getInstanceIndex(key);
      if (haveIndex >= 0) {
        this.datas[haveIndex].cb = cb;
      } else {
        this.datas.push({ cb, key });
      }
    },
    get() {
      return this.datas;
    },
    emit(options?: UseWatchNamespace.WatchChangeCbProps) {
      const watchFuns = this.get();
      watchFuns.forEach((watch) => void watch.cb?.(options));
    },
    getInstanceIndex(key: Symbol) {
      return this.get().findIndex((v) => v.key === key);
    },
    delete(key: Symbol) {
      const index = this.getInstanceIndex(key);
      if (index >= 0) {
        this.datas.splice(index, 1);
      }
    },
  });

  const useWatch: UseWatchNamespace.UseWatch<T> = (subScripeFun, cb) => {
    const symbolKey = useRef(Symbol('symbol')).current;
    const _subScripeFun = subScripeFun;
    const _cb = cb;

    const preRets = useRef<UseWatchNamespace.SubscripeFunReturnType>(null);

    const fun: UseWatchNamespace.WatchChangeCb = (options) => {
      const { isInitEmit = false } = options || {};

      const ret = _subScripeFun?.({ model });

      if (isInitEmit) {
        preRets.current = cloneDeep(ret);
        return;
      }
      const _isEqual = isEqual(ret, preRets.current);
      if (!_isEqual) {
        _cb?.(cloneDeep(ret), preRets.current);
      }
      preRets.current = cloneDeep(ret);
    };

    watchInstance.set(fun, symbolKey);

    useEffect(() => {
      setTimeout(() => {
        fun({ isInitEmit: true });
      });
      return () => {
        watchInstance.delete(symbolKey);
      };
    }, []);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     watchInstance.emit({ isInitEmit: true });
  //   });
  // }, []);
  return { useWatch, watchInstance };
}

export default usePrivateWatch;
