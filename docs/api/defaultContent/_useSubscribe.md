```jsx | pure
import { useForm, useSubscribe } from 'react-form-simple';

export default function App() {
  const { contextProps } = useForm({ name: 'name' });
  const subscribeName = useSubscribe(contextProps, ({ model }) => model.name);
}
```
