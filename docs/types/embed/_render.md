```jsx | pure
import type { UseFormReturnType } from 'react-form-simple';
type RenderType = UseFormReturnType['render'];

const render: RenderType
```

<br />

```jsx | pure
export type RenderType = (
  bindId: any,
  config?: RenderConfigType,
) => (parameter: RenderReturnFnArgTypes) => ReactNode;
```

<br />
