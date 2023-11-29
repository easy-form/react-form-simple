---
title: Advanced Usage
order: 1
---

## <Mdh>Component Form</Mdh>

The usage mentioned before in the document has satisfied most scenarios. However, developers who are accustomed to using components to render views can use **Form** or **FormItem** to render the page more intuitively.

**react-form-simple** exposes two components **Form** and **FormItem** to provide developers with components to create forms. These two components will be very useful when you need to customize the form or handle some additional logic.

When customizing a form, you only need to create a common object and pass it to **Form** or **FormItem** according to the convention, so that your form can work normally and be controlled. You can create your own _useForm_ as a developer based on this.

In addition, the render method can be freely combined with _Form_ and _FormItem_.

The props received by **FormItem** are almost equivalent to the parameters received by the render function. The difference is that the first parameter of the render function is the bindId of **FormItem**, and the second parameter is the prop of **FormItem**.

In addition, the parameters returned by the **getContent** method below are the parameters returned by the **defineProps** method of render (for usage, please see [Integrate third-party ui](/intro/introduce#Integrate third-party-ui)). The parameters will return some status and values of the form items. You can apply these states and values in **getContent** when using **FormItem**, and you can apply these states and values in defineProps when using the render function to do whatever you want.

To put it bluntly, the render method is an integration of the _FormItem_ component.

The following example shows the basic usage of **FormItem**.
<code src="../demos/_basic_formItem.tsx"></code>

#### Form usage

The following example shows the basic usage of **Form**.

The Prop received by **Form** can also be received by FormItem. If the same Prop is passed to both, the latter will overwrite the former.

Wrapping FormItem in **Form** allows centralized management of FormItem. The layout direction of the entire form can be set by passing in the direction property on the **Form** component.

The layout directions of the form are:

- row
- column

Default is `row`

<code src="../demos/_basic_form.tsx"></code>

## <Mdh>Component Verification</Mdh>

Pass in **bindId** and **rules** to verify the form items.

**bindId** is the unique identifier used to identify the form item. To make the form item controlled, **bindId** is necessary. Once **bindId** is passed in, the component will maintain all its own state internally.

After the form items are controlled, developers do not need to worry about the controlled process and logic externally. What developers need to do is how to apply these states externally.

**Note:** If there are multiple form items that need to be verified, multiple refs need to be defined. If unified validation is required, you can use the Form component to wrap them.

<code src="../demos/_formItem_vaild.tsx"></code>

#### Use the Form component to wrap and verify multiple FormItems

<code src="../demos/_form_vaild.tsx"></code>

## <Mdh>Externally Controlled</Mdh>

Components can be associated with useForm by passing in **contextProps**.

After using useForm, you can upgrade the component's verification and other operations to the api calls exposed by useForm.
<code src="../demos/_formItem_controll.tsx"></code>

#### Form Controlled

The example shown above requires that each FormItem be passed a contextProps to make it externally controlled. ContextProps can be passed up to the Form component.

<code src="../demos/_form_controller.tsx"></code>

## <Mdh>Use In Combination</Mdh>

When rendering a form, you can use the render function to render it separately, you can use FormItem to render it separately, or you can even wrap them all in a **Form**, it all depends on your personal preferences and needs.
<code src="../demos/_combination.tsx"></code>

## <Mdh>Customized Form</Mdh>

You can customize your form by passing in a normal form object to completely customize the form's controlled logic without relying on the useForm hook.

The following example shows the basic usage of the overall customization of the FormItem component wrapped by the Form component.

You can extract the FormItem separately and customize it since the Form component is not required.
<code src="../demos/_custom.tsx"></code>
