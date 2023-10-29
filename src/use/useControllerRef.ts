import { useRef } from 'react';

export function useControllerRef<T extends Record<string, any>>(obj: T): T {
  const ref = useRef(obj);
  return ref.current;
}

export default useControllerRef;
