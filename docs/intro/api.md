---
title: API
order: 2
# nav: api
---

## <Mdh>useForm</Mdh>

Quickly create a controllable form hook.

**Usage:** `const { } = useForm(model, [config])`

The first parameter of _useForm_ is the field object of the form, and the second parameter is the configuration of the form item, which is optional.

```jsx | pure
import { useForm } from 'react-form-simple';

export default function App() {
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
```

<CustomAPI path="Config parameters:docs_apiDemos_useForm,UseForm Return Value:docs_apiDemos_useFormReturnType" ignoreFields="UseForm Return Value:default"></CustomAPI>

## Form

Form wrapper container. When you need to use layout or set certain properties uniformly, you can use Form to wrap the form content. When using useForm, the second parameter of useForm can also set properties uniformly.

Usage:

```jsx | pure
import React from 'react';
import { Form } from 'react-form-simple';

export default function App(props: FormProps) {
  return <Form>{/** code */}</Form>;
}
```

<CustomAPI path="Form Prop:docs_apiDemos_Form,Form API:docs_apiDemos_FormApi"></CustomAPI>

## FormItem

Render the form as a component. This is needed when customizing the form.

Usage:

```jsx | pure
import React from 'react';
import { FormItem } from 'react-form-simple';

export default function App() {
  return <FormItem getContent={({ attrs }) => <input {...attrs} />} />;
}
```

<CustomAPI path="FormItem Prop:docs_apiDemos_FormItem,FormItem API:docs_apiDemos_FormItemApi" ></CustomAPI>
