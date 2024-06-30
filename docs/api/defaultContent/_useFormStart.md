```jsx | pure
import { useForm } from 'react-form-simple';

export default function App() {
  const {
    render,
    model,
    setState,
    forceUpdate,
    setValue,
    setValues,
    useSubscribe,
    useWatch,
    validate,
    reset,
    removeValidator,
    reapplyValidator,
    clearValidate,
    contextProps,
  } = useForm(model, [config]);
}
```
