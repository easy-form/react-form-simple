```jsx | pure
import type { UseFormReturnType } from 'react-form-simple';
type UseWatchType = UseFormReturnType<T=unknown>['watch'];

// or
import type { FormWatch } from 'react-form-simple'

// or
import type { UseWatchNamespace } from 'react-form-simple'
type UseWatchType = UseWatchNamespace.Watch<T=unknown>
```

<br />
