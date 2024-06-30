---
title: Functional
group:
  title: Docs
  order: 1
order: 2
toc: content
---

# Functional Controlled

When creating a form, we typically opt for the [basic](/intro/controller) direct control approach. With direct control, the library automatically collects the **onChange** and **value** attributes of controlled components. This way, developers don't need to focus too much on controlled logic, making it very convenient for quickly creating controlled form applications.

However, sometimes we want more customization and control, rather than relying on the library to handle everything automatically. In such cases, functional control becomes particularly important.

### <Mdh version="1.5.1">Basic Usage</Mdh>

As the name suggests, functional control allows you to create a bridge between the model and the view in a functional way. As shown in the example below, functional control only requires binding **attrs** to the form control to establish the bridge between the view and the model.

<code src="../demos/_controller_fn.tsx"></code>

### <Mdh version="1.5.1">Controlled Custom Components</Mdh>

During development, we often use custom components or third-party UI libraries. Sometimes, the **onChange** of a custom component does not output a standard event object, but rather a specific value. In such cases, you may need to do the following:
<code src="../demos/_controller_fn_custom.tsx"></code>

### <Mdh version="1.5.1">Controlled Non-Standard Event Objects</Mdh>

Functional control behaves exactly the same as direct control. If a custom component does not directly return a standard event object, you may not want to manually nest **onChange({ target: { value: xxxx } })** (as shown in the example above). In this case, you can use the formatChangeValue function to simplify the process.

Once **formatChangeValue** is defined, **react-form-simple** will use its return value as the final value:

<code src="../demos/_controller_fn_outside_format.tsx"></code>

### <Mdh version="1.5.1">Controlled Checkbox</Mdh>

When dealing with components that only accept true and false values, it's often not suitable to directly pass a value attribute. Instead, we can use `attrs.checked` to achieve control.

<code src="../demos/_controller_fn_checkBox.tsx"></code>

### <Mdh version="1.5.1">Combining with defineProps</Mdh>

In directly controlled components, defineProps configuration is often used to define the props of the controlled control based on the form item state. However, after adopting functional control, we can define the props of the component directly in the function body. Even so, we can still use it with defineProps.

The following example shows how to define styles using defineProps and apply styles to form controls through the props parameter of the functional component. When the input box has a value, the border will turn green, otherwise it will keep the default color.

<code src="../demos/_controller_fn_props.tsx"></code>

### <Mdh version="1.5.1">Customization</Mdh>

When dealing with controlled components, in addition to returning attrs, we can also provide multiple operation interfaces for form items. These interfaces allow us to highly customize components.

<code src="../demos/_controller_fn_api.tsx"></code>
