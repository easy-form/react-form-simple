import { cloneDeep } from 'lodash';
import { useEffect, useState } from 'react';
import { UseSubscribeNamespace } from 'react-form-simple/types/use';
import { useControllerRef } from 'react-form-simple/use/useControllerRef';

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
  const { model } = options;

  const subscribes = useControllerRef(subscribeObject());

  const useSubscribe: UseSubscribeNamespace.UseSubscribe<T> = (cb) => {
    const [state, setState] = useState<any>();
    useEffect(() => {
      subscribes.set(() => {
        setState(cb({ model: cloneDeep(model) }));
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
