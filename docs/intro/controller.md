---
nav: Docs
title: Controlled
group:
  title: Docs
  order: 1
order: 1
toc: content
---

# Controlled Inputs

Create controlled bridges through the **render** function.

### <Mdh>Basic Usage</Mdh>

You can create a controlled form application with just two short lines of code. The example below demonstrates defining an initial form model using useForm and passing the initial value 'name' to the input field.

<code src="../demos/_controller.tsx"></code>

### <Mdh>External Control</Mdh>

External controlled form items can be directly implemented by dot assignment.

<code src="../demos/_controller_outside.tsx"></code>

### <Mdh>API Control</Mdh>

In addition to direct assignment via dot notation, you can also implement value assignment to form items by calling methods.

<code src="../demos/_controller_setValue.tsx"></code>

### <Mdh>Custom Component Control</Mdh>

After defining the **onChange** and **value** attributes of the component, the **render** function will automatically collect them.

<code src="../demos/_controller_custom.tsx"></code>

### <Mdh>Controlled Non-Standard Event Objects</Mdh>

Controlled components typically obtain the value of form controls through the **target** property of the event object. **React form simple** defaults to using **e.target.value** to retrieve the value of controlled components. However, when you use a custom form component, you may encounter situations where the component does not directly return a standard event object. In this case, you may want **onChange** to directly return a specific value instead of manually nesting **onChange({ target: { value: xxxx } })**.

In such cases, you can pass a render configuration to handle this.

<code src="../demos/_controller_custom_format.tsx"></code>

Define the **formatChangeValue** function to intercept and process the value of form controls. Once this function is defined, **React form simple** will use the return value of **formatChangeValue** as the final value.

### <Mdh>Controlled Non-onChange Events</Mdh>

React Form Simple by default collects onChange and value attributes. However, some components may not accept these attributes. In such cases, we can resolve this by passing a render configuration.

The defineProps function is used to define the props passed to form controls. Through this function, we can pass **onChange** and **value** from **React Form Simple** internally to the <span><</span>Custom /> component.

<code src="../demos/_controller_custom_defineProps.tsx"></code>

### <Mdh>Nested Fields</Mdh>

<code src="../demos/_controller_child.tsx"></code>

### <Mdh >Unified Configuration</Mdh>

If all your form controls have the same behavior, such as not directly returning standard event objects, configuring them one by one can be cumbersome, especially when dealing with many form elements. Therefore, we can simplify the operation by passing a unified configuration to useForm.

If a form control has different behavior, you can configure it separately, in which case the configuration takes precedence over the unified configuration in useForm.

<code src="../demos/_controller_config_format.tsx"></code>
