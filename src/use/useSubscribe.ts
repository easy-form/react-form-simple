import { cloneDeep } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { UseSubscribeNamespace } from 'react-form-simple/types/use';
import { useControllerRef } from 'react-form-simple/use/useControllerRef';
import { isEqual } from 'react-form-simple/utils/util';

const subscribeObject = () => {
  const object = {
    datas: [] as Array<() => void>,
    get() {
      return object.datas;
    },
    set(cb: () => void) {
      object.datas.push(cb);
    },
    emit() {
      const subscribeCbs = object.get();
      subscribeCbs.forEach((fn) => void fn?.());
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

    useEffect(() => {
      subscribes.set(() => {
        const { model } = options;
        const value = cb({ model: cloneDeep(model) });
        if (isEqual(value, preValueRef.current)) return;
        preValueRef.current = value;
        setState(value);
      });
      setTimeout(() => {
        subscribes.emit();
      });
    }, []);

    return state;
  };

  return { useSubscribe, subscribes };
};

export default usePrivateSubscribe;
