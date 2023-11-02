---
title: API
order: 2
# nav: api
---

## <Mdh>useForm</Mdh>

快速的创建一个可受控表单的 hook。

**用法:** `const { } = useForm(modal, [config])`

_useForm_ 的第一个参数是表单的字段对象，第二个参数是表单项的配置，可选。

```jsx | pure
import { useForm } from 'react-form-simple';

export default function App() {
  const {
    render,
    modal,
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

_config 参数支持的配置如下：_

<CustomAPI path="docs_apiDemos_useForm"></CustomAPI>

_useForm 返回值如下：_

## FormItem

<CustomAPI path="src_template_FormItem"></CustomAPI>
