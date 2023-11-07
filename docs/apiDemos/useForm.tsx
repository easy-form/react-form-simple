import { useForm } from 'react-form-simple';
import type { UseFormNamespace } from 'react-form-simple/types/use';

export default function App(props: UseFormNamespace.ShareConfig) {
  const {
    render,
    model,
    setState,
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
  } = useForm();
}
