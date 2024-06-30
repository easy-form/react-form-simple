```jsx | pure
import { FormItem } from 'react-form-simple';

export default function App() {
  return <FormItem>{/** code */}</FormItem>;
}
```

<br />

```jsx | pure
import { FormItem, type FormItemApis } from 'react-form-simple';

export default function App() {
  const formItemRef = useRef<FormItemApis>()
  return <FormItem ref={formItemRef}>{/** code */}</FormItem>;
}
```
