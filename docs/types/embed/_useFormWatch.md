```jsx | pure
import type { UseFormReturnType } from 'react-form-simple';
type UseWatchType = UseFormReturnType<T=unknown>['useWatch'];

// or
import type { UseFormWatch } from 'react-form-simple'

// or
import type { UseWatchNamespace } from 'react-form-simple'
type UseWatchType = UseWatchNamespace.UseWatch<T=unknown>
```

<br />

```jsx | pure
export interface UseWatch<T = Record<string, any>> {
  (
    subscripeFun: { (options: { model: T }): SubscripeFunReturnType },
    cb: {
      (
        newValue: SubscripeFunReturnType,
        preValue: SubscripeFunReturnType,
      ): void,
    },
  ): void;
}
```

<br />

#### SubscripeFunReturnType

```jsx | pure
type SubscripeFunReturnOriginalType =
  | string
  | number
  | boolean
  | Record<string, any>;

export type SubscripeFunReturnType =
  | SubscripeFunReturnOriginalType
  | SubscripeFunReturnOriginalType[]
  | null
  | undefined;
```
