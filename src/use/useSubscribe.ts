import { cloneDeep } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { UseSubscribeNamespace } from 'react-form-simple/types/use';
import { useControllerRef } from 'react-form-simple/use/useControllerRef';
import { isEqual } from 'react-form-simple/utils/util';

const subscribeObject = () => {
  const object = {
    datas: [] as Array<{ key: symbol; cb: () => void }>,

    getInstanceIndex(key: symbol) {
      return this.get().findIndex((v) => v.key === key);
    },
    get() {
      return this.datas;
    },
    set(cb: () => void, key: symbol) {
      const index = this.getInstanceIndex(key);
      if (index >= 0) {
        this.datas[index].cb = cb;
      } else {
        this.datas.push({ key, cb });
      }
    },
    emit() {
      setTimeout(() => {
        const subscribeCbs = this.get();
        subscribeCbs.forEach((subs) => {
          subs.cb?.();
        });
      });
    },
    delete(key: symbol) {
      const index = this.getInstanceIndex(key);
      if (index >= 0) {
        this.datas.splice(index, 1);
      }
    },
  };
  return object;
};

export const usePrivateSubscribe = <T extends Record<string, any>>(options: {
  model: T;
}): UseSubscribeNamespace.UseSubscribeReturnType<
  T,
  ReturnType<typeof subscribeObject>
> => {
  const subscribes = useControllerRef(subscribeObject());

  const useSubscribe: UseSubscribeNamespace.UseSubscribe<T> = (cb) => {
    const [state, setState] = useState<any>();
    const preValueRef = useRef(null) as any;
    const symbolKey = useRef(Symbol('symbol')).current;

    useEffect(() => {
      subscribes.set(() => {
        const { model } = options;
        const value = cb({ model: cloneDeep(model) });
        if (isEqual(value, preValueRef.current)) return;
        preValueRef.current = value;
        setState(value);
      }, symbolKey);
    }, [cb]);

    useEffect(() => {
      subscribes.emit();
      return () => {
        subscribes.delete(symbolKey);
      };
    }, []);

    return state;
  };

  return { useSubscribe, subscribes };
};

export default usePrivateSubscribe;
