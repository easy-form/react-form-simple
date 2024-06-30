```jsx | pure
import { Form } from 'react-form-simple';

export default function App() {
  return <Form>{/** code */}</Form>;
}
```

<br />

```jsx | pure
import { Form, type FormApis } from 'react-form-simple';

export default function App() {
  const formRef = useRef<FormApis>()
  return <Form ref={formRef}>{/** code */}</Form>;
}
```
