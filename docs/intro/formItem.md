---
title: Components
group:
  title: Docs
  order: 1
order: 9
toc: content
---

# Components

The usage mentioned earlier already satisfies most scenarios. However, for developers who prefer to render views using component form, using Form and FormItem is a good choice. **React Form Simple** provides two components: Form and FormItem, allowing developers to create forms in a component form. These two components will be very useful when customizing forms or handling additional logic.

### <Mdh>Basic Usage</Mdh>

By passing the `bindId` attribute and passing `attrs` to the form controls that need to be controlled, FormItem will automatically manage and control their states. Each FormItem requires a unique `bindId` (form item field).

As shown in the example below, the **getContent** method is used to return a form item that needs to be controlled. You can think of the getContent method as equivalent to the **defineProps** method in the render method configuration or the controlled function in the functional control. They are almost equivalent.

<code src="../demos/formItem/_basic.tsx"></code>

### <Mdh>Validation</Mdh>

By passing _rules_, you can set validation rules for form items. The props received by FormItem are almost equivalent to the configuration received by the render function.

If you want to learn more about validation, please check the related [documentation](/intro/vaild).

<code src="../demos/formItem/_formItem_vaild.tsx"></code>

### <Mdh>Validation Boost</Mdh>

By elevating validation to the **Form** component level, you can more flexibly manage the validation logic for the entire form. These rules will be applied to all form items within the Form, without having to be scattered across individual form items.

Elevating the definition of refs to the Form component allows you to validate multiple form items at once.
<code src="../demos/formItem/_form_vaild.tsx"></code>

### <Mdh>Controlled Value</Mdh>

Once a bindId is passed in, the component internally manages all its states and controlled logic. Once the form item is controlled, developers don't need to concern themselves with the controlled process and logic, just focus on how to apply these states externally.

As shown in the example below, pass an object called **contextProps** to FormItem, which defines a hook named **updated**. Then define a variable named _formValueRef_ to receive the controlled value of the form item in the **updated** hook.

_Note_: The **updated** hook only triggers when manually inputting the form item element.
<code src="../demos/formItem/_controller_contextProps.tsx"></code>

### <Mdh>Promoting ContextProps</Mdh>

As shown in the example above, you need to define a contextProps object for each form item, which may not always be desirable. This can lead to additional workload and maintenance costs. Therefore, we can promote the contextProps to the Form component for centralized management.

As shown in the example below, we promote the contextProps and pass it to the Form component, allowing us to uniformly set contextProps for each internal FormItem.

<code src="../demos/formItem/_controller_contextProps_form.tsx"></code>

### <Mdh>Destory</Mdh>

When a component is destroyed, we need to know that it has been destroyed in order to reset the values of the corresponding form items. Fortunately, we can achieve this by using the **destroy** hook of the contextProps object.

<code src="../demos/formItem/_destory.tsx"></code>

### <Mdh>External Control</Mdh>

### External Control

Just as we've learned how to get internally controlled values from form items, we also need to know how to control form items externally.

As shown in the example below, by using **ref** to get the component instance and calling its methods, you can achieve control by utilizing **updated** to get the value after the input field's **onChange** event.

<code src="../demos/formItem/_controller.tsx"></code>

### <Mdh> Controlled Elevation</Mdh>

You might have noticed that when there are many form elements, defining multiple refs to control them can be inconvenient. Therefore, we can elevate the control to the Form component itself.

<code src="../demos/formItem/_controller_form.tsx"></code>

### <Mdh>apiEffect API</Mdh>

You can also avoid defining refs altogether by relying entirely on the **contextProps** object and its hooks to achieve controlled behavior. In the following example, define the **apiEffect** hook to receive all supported APIs from the component. In this example, only the **setValue** method is received.
<code src="../demos/formItem/_controller_effect.tsx"></code>

### <Mdh>Combining with useForm</Mdh>

You might find manually writing **contextProps** and managing controlled components a bit cumbersome, as it requires defining a series of hooks and logic, as well as constantly maintaining the controlled values of the form objects externally. This approach is not ideal for quickly creating a form application, unless you aim to customize the form extensively.

Therefore, **React Form Simple provides a way to combine with the `useForm` hook, eliminating the need to create `contextProps` and manage external control, which is very useful for quickly using components to create forms**.

As shown in the example below, bind `bindId` to `useForm`, expose `contextProps` through `useForm`, and pass `contextProps` to the `Form` or `FormItem` component. It is important to note that when using component forms, the initial value of the form item, `_initialValue`, needs to be manually defined once.

<code src="../demos/formItem/_controller_useForm.tsx"></code>

### <Mdh>Combining Usage</Mdh>

When combined with useForm, render, Form, and FormItem can be freely combined and used together.

<code src="../demos/formItem/_combination.tsx"></code>

### <Mdh version="">Decoupling UI and Model</Mdh>

By introducing the Form component, we can modify the above [example](/intro/layout#config) and put the common configuration into the Form component, while useForm only maintains the model data, thus realizing the separation of the form model and configuration.

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
