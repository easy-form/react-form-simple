```jsx | pure
import type { UseFormReturnType } from 'react-form-simple';
type UseSubscribeType = UseFormReturnType<T=unknown>['useSubscribe'];

// or
import type { UseSubscribe } from 'react-form-simple'

// or
import type { UseSubscribeNamespace } from 'react-form-simple'
type UseSubscribeType = UseSubscribeNamespace.UseSubscribe<T=unknown>
```

<br />

```jsx | pure
export interface UseSubscribe<T> {
  <O = unknown>(cb: (options: { model: T }) => O): O;
}
```
