import { useRef, useState } from 'react';
import { observer } from 'react-form-simple/utils/controller';

export function useController<T extends Record<string, any>>(obj: T): T {
  const [, setState] = useState({});
  const proxyStateRef = useRef(obj);

  return observer(proxyStateRef.current, () => {
    setState({});
  });
}

export default useController;
