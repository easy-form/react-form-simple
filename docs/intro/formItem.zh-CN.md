---
title: 组件形式
group:
  title: 文档
  order: 1
order: 9
toc: content
---

# 组件形式

前面提到的用法已经满足了大多数场景。然而，对于习惯使用组件形式来渲染视图的开发者来说，使用 Form 和 FormItem 是一个很好的选择。*React Form Simple*提供了两个组件：Form 和 FormItem，供开发人员以组件形式创建表单。在需要定制化表单或处理额外逻辑时，这两个组件将非常有用。

### <Mdh>基本用法</Mdh>

通过传入 `bindId` 属性并将 `attrs` 传递给需要受控的表单控件，FormItem 会自动对其进行状态管理和控制。每个 FormItem 都需要一个唯一的 `bindId`（表单项字段）。

如下示例所示，使用了 _getContent_ 方法返回一个需要受控的表单项。你可以将 getContent 方法视为 render 方法配置中的 _defineProps_ 方法或函数式受控中的*受控函数*。它们几乎是等价的。
<code src="../demos/formItem/_basic.tsx"></code>

### <Mdh>组件校验</Mdh>

传入 _rules_ 即可为表单项设置校验规则。FormItem 接收的 props 与 render 函数接收的配置几乎是等价的。

如需了解更多校验内容，请[查看](/zh-CN/intro/vaild)相关文档。

<code src="../demos/formItem/_formItem_vaild.tsx"></code>

### <Mdh>校验提升</Mdh>

通过将校验提升到 Form 组件级别，可以更加灵活地管理整个表单的校验逻辑。这些规则将应用到 Form 内的所有表单项上。而不必分散在各个表单项中。

将 ref 的定义提升到 _Form_ 组件上，这样可以一次性校验多个表单项。
<code src="../demos/formItem/_form_vaild.tsx"></code>

### <Mdh>获取受控值</Mdh>

一旦传入了 bindId，组件内部就会维护其所有状态和受控逻辑。表单项受控后，开发者无需关心受控的过程和逻辑，只需关注如何在外部应用这些状态。

如下例所示，给 FormItem 传入一个 _contextProps_ 对象，该对象中定义了一个名为 updated 的钩子，然后定义一个名为 _formValueRef_ 的变量，用于在 updated 钩子中接收表单项受控后的值。

_注意_： updated 钩子只有在手动输入表单项元素时才会触发。
<code src="../demos/formItem/_controller_contextProps.tsx"></code>

### <Mdh>contextProps 提升</Mdh>

如上例所示，你需要为每个表单项定义 contextProps 对象，有些时候你可能并不乐意如此做。因为这会带来额外的工作量和维护成本。因此，我们可以将 contextProps 提升到 _Form_ 组件中去设置。

如下例所示，我们将 _contextProps_ 提升并传递给 Form 组件，这样可以统一为内部的每个 FormItem 设置 _contextProps_。
<code src="../demos/formItem/_controller_contextProps_form.tsx"></code>

### <Mdh>组件销毁</Mdh>

当组件销毁时，我们需要知道它已被销毁，以便重置相应的表单项值。幸运的是，我们可以借助 contextProps 对象的 _destroy_ 钩子来实现这一点。
<code src="../demos/formItem/_destory.tsx"></code>

### <Mdh>外部受控</Mdh>

我们已经了解了如何获取表单项的内部受控值，同样地，我们也需要知道如何在外部控制表单项。

如下例所示，通过使用 ref 获取组件实例并调用其方法，再利用 updated 获取输入框 onChange 后的值，即可实现受控。

<code src="../demos/formItem/_controller.tsx"></code>

### <Mdh>受控提升</Mdh>

你可能已经发现，对于表单项元素一多的时候，需要定义多个 ref 去操控它。这会显得尤为不便。因此我们可以将受控提升到 Form 组件中去操作。

<code src="../demos/formItem/_controller_form.tsx"></code>

### <Mdh>apiEffect 实现受控</Mdh>

你也可以不必定义 ref，而是完全依赖于 contextProps 上下文对象，利用其钩子来实现受控。如下例所示，定义 _apiEffect_ 钩子用来接收组件支持的所有 API，示例中仅接收 setValue 方法。
<code src="../demos/formItem/_controller_effect.tsx"></code>

### <Mdh>结合 useForm</Mdh>

你可能对于手写 contextProps 和受控觉得有些麻烦，因为它需要定义一系列钩子和逻辑，以及需要时时刻刻在外部维护表单对象的受控值。这显示对于快速创建一个表单应用来说不是一个好的解决方式，除非你想要定制化表单。

因此，_React form simple 提供了与 useForm hook 结合的方式，省略了创建 contextProps 与外部受控的过程，这个对于快速使用组件形式创建表单来说非常有用。_

如下例所示，将 bindId 与 useForm 对应，使用 useForm 暴露出 contextProps，并将 contextProps 传给 Form 或者 FormItem 组件即可。需要注意的一点是，使用组件形式时表单项的初始值 _initialValue_ 需要手动定义一次。
<code src="../demos/formItem/_controller_useForm.tsx"></code>

### <Mdh>组合使用</Mdh>

与 useForm 结合后，render、Form、FormItem 可以随意搭配组合使用。

<code src="../demos/formItem/_combination.tsx"></code>

### <Mdh version="">UI 与模型的解耦分离</Mdh>

通过引入 Form 组件，我们可以改造上面的[例子](/zh-CN/intro/layout#统一配置)，将公共配置放到 Form 组件中，而 useForm 只维护模型数据，从而实现表单模型与配置的分离。

```jsx | pure
import React from 'react';
import { Form, useForm, type FormProps } from 'react-form-simple';

export default function App() {
  const { render, contextProps } = useForm({ name: '' });

  const formProps: FormProps = {
    formItemClassName: 'formItemClassName',
    formItemStyle: {},
    labelClassName: 'labelClassName',
    labelStyle: {},
    contentClassName: 'contentClassName',
    contentStyle: {},
    errorStyle: {},
    errorClassName: 'errorClassName',
    fullWidth: true,
    formClassName: 'formClassName',
    formStyle: {},
    labelWidth: '',
    formatChangeValue(event) {},
    readOnly: false,
    readOnlyText() {
      return <></>;
    },
    trigger: 'change',
    direction: 'column',
    labelPosition: 'row',
    contextProps,
    noStyle: false,
  };

  return (
    <Form {...formProps}>
      {render('name', {
        label: 'name',
        rules: { required: 'Please Input' },
        requireIndicator: true,
      })(<input />)}
    </Form>
  );
}
```
