---
title: API
order: 2
# nav: api
---

## <Mdh>useForm</Mdh>

快速的创建一个可受控表单的 hook。

**用法:** `const { } = useForm(model, [config])`

_useForm_ 的第一个参数是表单的字段对象，第二个参数是表单项的配置，可选。

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

<CustomAPI path="config 参数:docs_apiDemos_useForm,useForm返回值:docs_apiDemos_useFormReturnType" ignoreFields="useForm返回值:default"></CustomAPI>

## Form

表单包裹容器。当需要使用布局或者需要统一设置某些属性时，可以用 Form 将表单内容包裹。使用 useForm 时，useForm 的第二个参数也可以统一设置属性。

用法：

```jsx | pure
import React from 'react';
import { Form } from 'react-form-simple';

export default function App(props: FormProps) {
  return <Form>{/** code */}</Form>;
}
```

<CustomAPI path="Form Prop:docs_apiDemos_Form,Form API:docs_apiDemos_FormApi"></CustomAPI>

## FormItem

以组件形式渲染表单。定制化表单时，这个需要用到。

用法：

```jsx | pure
import React from 'react';
import { FormItem } from 'react-form-simple';

export default function App() {
  return <FormItem getContent={({ attrs }) => <input {...attrs} />} />;
}
```

<CustomAPI path="FormItem Prop:docs_apiDemos_FormItem,FormItem API:docs_apiDemos_FormItemApi" ></CustomAPI>

<!-- ## contextProps

表单项选项式生命周期。对整个表单进行依赖收集的地方，可以在这里对表单项做一些更加精确的控制。使用 useForm 时，通常不会需要这个。使用 FormItem 或者 Form 时或者定制化表单时，需要用到这个。当 useForm 与 Form 或者 FormItem 结合使用的时候，需要将 useForm 暴露出的 contextProps 传递给组件来进行依赖收集，也可以在你的代码里做一层代理执行某些逻辑后，在执行 contextProps 里的生命周期达到自定义的控制。

用法：

```jsx | pure
import React from 'react';
import { FormItem } from 'react-form-simple';

export default function App() {
  return (
    <FormItem
      getContent={() => <input />}
      contextProps={
        {
          /** ... */
        }
      }
    />
  );
}
```

<CustomAPI path="contextProps:docs_apiDemos_contextProps"  ignoreFields="contextProps:default"></CustomAPI> -->

<!-- ## getContent

使用 FormItem 组件形式创建一个受控表单项时，需要传入一个 _getContent_ 方法，方法返回需要渲染的内容。

_getContent_ 的参数包含有该表单项的 API、该表单项的模型数据、校验状态以及符合原生属性的 attrs，开发者可以针对这些参数做相应的逻辑处理。

在参数返回的表单项 API 中，你可以直接调用来触发该表单项的对应事件以达到更精确更细度的控制。

<CustomAPI path="getContent 方法参数:docs_apiDemos_getContent"  ignoreFields="getContent 方法参数:default"></CustomAPI> -->
