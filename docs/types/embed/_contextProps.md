```jsx | pure
import type { ContextProps } from 'react-form-simple';

// or
import type { GlobalProps } from 'react-form-simple';
type ContextProps = GlobalProps.ContextProps;

// or
import type { FormItemProps } from 'react-form-simple';
type ContextProps = FormItemProps['contextProps'];
```

<br />
