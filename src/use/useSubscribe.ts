import { cloneDeep } from 'lodash';
import { useEffect, useState } from 'react';
import { UseSubscribeNamespace } from 'react-form-simple/types/use';
import { useControllerRef } from 'react-form-simple/use/useControllerRef';

const s = {
  datas: [] as Array<() => void>,
  get() {
    return s.datas;
  },
  set(cb: () => void) {
    s.datas.push(cb);
  },
  emit() {
    const subscribeCbs = s.get();
    subscribeCbs.forEach((fn) => void fn?.());
  },
};

export const usePrivateSubscribe = <T extends Record<string, any>>(options: {
  modal: T;
}): UseSubscribeNamespace.UseSubscribeReturnType<T, typeof s> => {
  const { modal } = options;

  const subscribes = useControllerRef(s);

  const useSubscribe: UseSubscribeNamespace.UseSubscribe<T> = (cb) => {
    const [state, setState] = useState();
    useEffect(() => {
      subscribes.set(() => {
        setState(cb({ modal: cloneDeep(modal) }));
      });
    }, []);

    return state;
  };

  useEffect(() => {
    setTimeout(() => {
      s.emit();
    });
  }, []);

  return { useSubscribe, subscribes };
};

export default usePrivateSubscribe;
