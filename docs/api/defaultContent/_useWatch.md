```jsx | pure
import { useForm, useWatch } from 'react-form-simple';

export default function App() {
  const { model, contextProps } = useForm({ name: 'name' });

  useWatch(
    contextProps,
    ({ model }) => model.name,
    (value, preValue) => {},
  );
}
```
