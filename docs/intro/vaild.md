---
title: Validation
group:
  title: Docs
  order: 1
order: 5
toc: content
---

# Form Validation

### <Mdh>Basic Usage</Mdh>

Call the **validate** function to validate the form. The validate function will return a Promise. Here's a simple example of non-empty validation. You can validate the form by passing a rules configuration to the render.

The **requireIndicator** attribute is a required item indicator, indicating that the form item is required.

<code src="../demos/vaild/_basic.tsx"></code>

### <Mdh>Way</Mdh>

Pass the trigger attribute to the options parameter of the render to enable more validation methods for form items. Supported validation methods include:

- change (triggered on onChange)
- blur (triggered on onBlur)
- manual (triggered by manually calling the validate function)

The default value is change.
<code src="../demos/vaild/_trigger.tsx"></code>

### <Mdh>Unified Configuration</Mdh>

If all your form items need to be validated with blur or manual, you can lift the configuration of render to useForm.

Validate the form with the blur method.

<code src="../demos/vaild/_trigger_config.tsx"></code>

### <Mdh>Custom Validation</Mdh>

For complex form validation, simply passing **required** may not be sufficient. For example, you may need to validate against regular expressions or check the length of input characters. **Validator** can solve this problem well. For cases where the validation condition is not met, you can return an error description, which can be a string or a React component, depending on your preference. When the condition is met, you should return null, false, or an empty string.

**React Form Simple** does not provide predefined validation rules (except for empty validation) because it goes against the lightweight design principle. Predefined rules would make the library cumbersome and complex. Therefore, for complex validation, you need to write the rules yourself or integrate with third-party validation libraries (as shown in the example below). Alternatively, you can encapsulate validation rules above the render function.

<code src="../demos/vaild/_custom.tsx"></code>

### <Mdh>Integrating Third-Party Libraries</Mdh>

**React Form Simple** can integrate well with the third-party validation library you're using (assuming you're using one). So, if you're integrating **React Form Simple** into existing code, it won't disrupt your existing structure.

With the **setError** API, you can integrate form validation with the third-party validation library you're using. **setError** takes a form field and a string or component containing the error description. If the parameter passed to **setError** is a meaningful string or component, it triggers internal validation in the library, behaving exactly like the internal validation.

_Important:_ The priority of _setError_ is higher than the internal validation priority of the library. This means that if you call _setError_ and pass in an error description, unless you call _setError_ again later with an empty description, the validation status of this component will remain failed. Only when the validation of _setError_ passes will the internal _rules_ validation of the library continue to execute.

Here's a basic example of integrating with _Joi_.

<code src="../demos/vaild/_integration.tsx"></code>

### <Mdh>Style</Mdh>

You can customize the display style of error notifications by setting **errorStyle** and **errorClassName**. The following example achieves style changes by setting **errorStyle**.

<code src="../demos/vaild/_error_style.tsx"></code>

### <Mdh>Clear Validation</Mdh>

Calling the **clearValidate** method clears the validation information of form items. This method resets the validation status of form items to their initial state. It takes a form item field parameter, which can be a string or an array of strings.

<code src="../demos/vaild/_clearValidate.tsx"></code>

### <Mdh>Remove Validator</Mdh>

Calling the **clearValidate** method clears the validation information of form items and resets their status to the initial state. These form items will still be validated during the next validation. If you want these form items not to be validated during the next validation, you need to remove the validator with **removeValidator**.

**removeValidator** also accepts a parameter to remove the validator for either the form item or the entire form.
<code src="../demos/vaild/_removeValidator.tsx"></code>

### <Mdh>Reapply Validator</Mdh>

Calling **removeValidator** removes the validator for a form item. If you need to reapply validation later, you can call the **reapplyValidator** method to reapply the validator for either the form item or the entire form. This API is typically used in conjunction with **removeValidator**.

<code src="../demos/vaild/_reapplyValidator.tsx"></code>

### <Mdh>Filter</Mdh>

With **removeValidator** and **reapplyValidator**, you can selectively validate certain fields during the current validation. However, this may not always be convenient. To address this issue, we can dynamically control the **rules** to achieve selective validation.

As shown in the example below, validation is not performed when clicking the draft button, but it is performed when clicking the submit button.
<code src="../demos/vaild/_rules_select.tsx"></code>

### <Mdh version="1.5.2">Select Field Validation</Mdh>

By passing the fields to be validated to the _validate_ method, you can selectively validate these fields in the current validation stack instead of dynamically relying on setting _rules_. The difference is that it only takes effect in the current validation stack and does not affect the validation rules of the render form items.

It accepts a string or a collection of strings:
<code src="../demos/vaild/_select_vaild.tsx"></code>

### <Mdh>Error Callback</Mdh>

<code src="../demos/vaild/_callback.tsx"></code>

### <Mdh>Custom Error Notifications</Mdh>

Sometimes, we may want to customize how error notifications are displayed. By setting the **customErrTips** attribute, the library will no longer provide the default display of error notifications, and we need to manually render them in the view.

Based on the **onError** error callback function and **customErrTips** in the example above, we can retrieve error notifications and store them for display in other views. However, there seems to be a better way to achieve this.

<code src="../demos/vaild/_custom_tips.tsx"></code>

### <Mdh version="1.5.1">Customization</Mdh>

Based on functional control, each form item can independently control the timing of its validation, clearing validation, and removing validation. With these APIs, you can achieve customized and unique control logic for each form item.

<code src="../demos/vaild/_moment.tsx"></code>
