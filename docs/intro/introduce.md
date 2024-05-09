---
title: Document
# nav: 文档
---

## <Mdh>Get Start</Mdh>

A high-performance, flexible, and scalable form library suitable for performing form operations in [react](https://react.dev/).

#### Why use react-form-simple?

- By creating an observable object to observe the model operation of the form, the controlled form items are assigned directly through `_.`
- You can complete form control with just a few lines of code. You don't need to care about the controlled logic or the controlled process. You only need to know the controlled results and how to apply your controlled state.
- The rendering between each form item is automatically completely isolated, without the need for self organizing component isolation. This will enable faster response time after form input and greatly avoid page lag caused by large dynamic data.
- With data observation function, it can perform single or unified observation and monitoring of the entire form or a specific form item in certain scenarios. It can subscribe to values where you need to render with the latest values of form items.
- Flexible usage methods, flexible page layout combinations, developers can use certain methods and built-in layouts according to their preferences and scenarios. In most scenarios, developers do not need to manually lay out.
- Minimalist API design, in the process of operating forms, simply introducing two APIs can complete most of the work.
- Highly scalable form interface for easy customization of forms.
- Easily integrate third-party UI.
- Full type inference.

#### Installing

Just one command to use `react-form-simple`

```
npm install react-form-simple
```

#### Demo

The code below is a simple example of a controlled form

<code src="../demos/_example.tsx"></code>
:::info{ title=info }
The style of the control is based on the document, not the built-in style of **react-form-simple**. **react-form-simple** does not care about the style of the control.
:::

## <Mdh>Controlled Input</Mdh>

It only takes two lines of code to create a controlled form item. The following example shows the usage of useForm. And after 2 seconds of loading, change the value of the input box.

The _model_ form model data exposed by useForm is always up to date. This variable will be very useful during the form submission operation, but do not use it to render outside the form. It will not cause the view to be refreshed, even if it is The value is the latest.

See more _render_ configurations<a href="/intro/api#useform">useForm parameters</a>
<code src="../demos/_controller.tsx"></code>

## <Mdh version="1.5.1">Function Controlled</Mdh>

Using function-based controls, you can more flexibly organize the controlled logic of form items, which is very useful when customizing form items or when you need to manually process or manage certain states.

Function-based control is supported in `1.5.1` versions (including `1.5.1`).
<code src="../demos/_controller_fn.tsx"></code>
。
:::info{title=info}
After passing _attrs_ to the controlled component, the behavior of function-based control and component-based direct control will be exactly the same. The difference is that function-based control can be more precise and customized. set up. Print restOptions View more APIs.
:::

## <Mdh>Subscribe Values</Mdh>

Use _useSubscribe_ to subscribe to a form item or the value of an entire form. This will render the subscribed value in the view in real time. However, it is not recommended to subscribe in the parent component, because this will cause the entire rendering tree to be updated. The recommended approach is to only use it where subscription is needed. It can be transparently transmitted through props, or it can be injected into global state management.

<code src="../demos/_controller_sub.tsx"></code>

## <Mdh>Form Watch</Mdh>

Use _useWatch_ to monitor form changes.

For more introduction, please see <a href="/intro/api#useform">useForm</a>
<code src="../demos/_watch.tsx"></code>

## <Mdh>Form Validation</Mdh>

Pass in the _rules_ verification rules to verify the form items.

You can pass the _trigger_ attribute to the options parameter of render to allow the form item to support more verification methods.
Supported verification methods are:

- change
- blur
- manual

The default value is `change`

<code src="../demos/_vaild.tsx"></code>

## <Mdh>Third-party UI</Mdh>

You can use **react-form-simple** with any UI library used in your project, as long as your UI controls receive **value** and **onChange**. Even if your UI control does not receive **value** and **onChange**, you can still use _defineProps_ to do a layer of property conversion externally and pass it to your custom UI control. Or customize your useForm.

Below is an example of integrating **material-ui** and **Ant Design**.

#### Integrated material-ui

Below is an example of integrating **material-ui**. Just pass the control to render.

In the example, the name form item is passed a check that it is not empty. When the value is empty, an error message will appear and the input box will turn red.

<code src="../demos/_ui.tsx"></code>

#### <div style="margin-top: 15px">Integrate Ant Design</div>

Below is an example of integrating **Ant Design**. Just render the control.

Similarly, the name form item is passed a check that it is not empty. When the value is empty, an error message will appear and the input box will turn red.

<code src="../demos/_ui_antd.tsx"></code>

## <Mdh>Dynamic Form</Mdh>

Implement dynamic forms by directly assigning values to the array and then calling the _forceUpdate_ method to manually refresh the view. The purpose of calling the _forceUpdate_ method is that directly changing the model's data will not cause the view to re-render outside the form.
<code src="../demos/_dymic.tsx"></code>

You can also use another method to implement dynamic forms without calling the forceUpdate method.
<code src="../demos/_dymic_01.tsx"></code>

No matter which method is used, the first parameter of the render method should be separated by **.** if it is multi-level.

## <Mdh>Performance Testing</Mdh>

<code src="../demos/_performance_test.tsx"></code>
