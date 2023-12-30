import { useRef, useState } from 'react';
import { observer } from 'react-form-simple/utils/controller';

export function useController<T extends Record<string, any>>(obj: T): T {
  const [, setState] = useState({});
  const proxyStateRef = useRef(obj);

  const { proxyMap, rawMap } = useRef({
    proxyMap: new WeakMap(),
    rawMap: new WeakMap(),
  }).current;

  console.log();

  return observer(
    proxyStateRef.current,
    () => {
      setState({});
    },
    { proxyMap, rawMap },
  );
}

export default useController;
