---
title: Setup
group:
  title: Docs
  order: 1
order: 8
toc: content
---

# Basic Setup

React Form Simple integrates a default layout system internally, which is very useful for quickly creating form applications.

### <Mdh>label Position</Mdh>

By passing the **labelPosition** configuration option to the render function, you can control the relative position of labels. The **labelPosition** accepts values of `row` and `top`, with the default value being `row`.

<code src="../demos/layout/_labelPosition.tsx"></code>

### <Mdh>Direction</Mdh>

The overall direction of the form can be either `row` or `column` layout. We can control this by introducing the Form component. The Form component defaults to using the column layout.

<code src="../demos/layout/_form_dir.tsx"></code>

### <Mdh version="">Layout</Mdh>

By combining the use of the _labelPosition_ and _direction_ configuration options, you can flexibly control the layout of the form:

- **labelPosition** controls the relative position of labels and accepts values of `row` and `top`, with the default value being `row`.
- **direction** controls the overall direction of the form and accepts values of `row` and `column`, with the default being the `column` layout.

<code src="../demos/layout/_layout_combination.tsx"></code>

### <Mdh>Setting Atomic Styles</Mdh>

Setting Atomic Styles

**React Form Simple** provides control over various atomic area styles, including setting class names and styles. Developers can override these default styles or write their own styles externally.

Open the browser's debugging tool to view and adjust the styles that have been set.
<code src="../demos/layout/_set_atom_style.tsx"></code>

### <Mdh>Config</Mdh>

If there are many form elements, you can elevate the common configuration of render to the configuration parameters of useForm. This way, you can uniformly set the same configuration for each render.

<code src="../demos/layout/_unify.tsx"></code>

### <Mdh>No Style</Mdh>

Setting `noStyle` to true can remove all styles from the form items, and the form controls will no longer be wrapped by a container. This configuration option can be set uniformly.

Open the browser's debugging tool to view the rendering result.

<code src="../demos/layout/_noStyle.tsx"></code>

### <Mdh>Required Indicator</Mdh>

Setting **requireIndicator** to true can display the required indicator for form fields, and it also supports customizing the required indicator.
<code src="../demos/layout/_requireIndicator.tsx"></code>

### <Mdh>ReadOnly</Mdh>

<code src="../demos/layout/_readOnly.tsx"></code>

#### ReadOnly Render Item

<code src="../demos/layout/_readOnly_simple.tsx"></code>

### <Mdh>ReadOnly State Content</Mdh>

By setting the _readOnlyText_, you can specify the content displayed for form items in read-only state. This configuration can be set individually or uniformly.
<code src="../demos/layout/_readOnly_content.tsx"></code>
