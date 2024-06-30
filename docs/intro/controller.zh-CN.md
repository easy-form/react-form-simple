---
nav: 文档
title: 受控输入
group:
  title: 文档
  order: 1
order: 1
toc: content
---

# 受控输入

通过 **render** 函数创建受控桥梁。

### <Mdh>基本用法</Mdh>

只需要简短的两行代码便能创建出一个受控的表单应用。下面的例子演示通过 useForm 定义初始表单模型，并将初始值 'name' 传递给 input 输入框。
<code src="../demos/_controller.tsx"></code>

### <Mdh>外部受控</Mdh>

外部受控表单项可以直接通过点赋值来实现。

<code src="../demos/_controller_outside.tsx"></code>

### <Mdh>API 受控</Mdh>

除了直接通过点赋值来实现之外，还可以通过调用方法来实现给表单项的赋值。
<code src="../demos/_controller_setValue.tsx"></code>

### <Mdh>自定义组件受控</Mdh>

定义组件的**onChange**和**value**属性后，**render**函数会去自动收集它们。
<code src="../demos/_controller_custom.tsx"></code>

### <Mdh>非标准事件对象受控</Mdh>

受控组件通常通过事件对象的 **target** 属性来获取表单控件的值。**React form simple** 默认使用 **e.target.value** 来获取受控控件的值。但是当你使用自定义表单组件时，可能会遇到该组件不直接返回标准事件对象的情况。此时，你可能希望 **onChange** 直接返回某个具体的值，而不是手动嵌套 **onChange({ target: { value: xxxx } })**。

在这种情况下，你可以传入一个 render 配置来处理。

<code src="../demos/_controller_custom_format.tsx"></code>

<span style="letter-spacing: 0">定义 **formatChangeValue** 函数来拦截和处理表单控件的值。定义了这个函数后，**react-form-simple** 会使用 **formatChangeValue** 的返回值作为最终值。</span>

### <Mdh>非 onChange 事件受控</Mdh>

_React Form Simple_ 默认收集 _onChange_ 和 _value_ 属性。然而，有些组件可能不接收这两个属性。对于这种情况，我们可以通过传入一个 render 配置来解决。

_defineProps_ 函数用于定义传递给表单控件的 props。通过这个函数，我们可以将 **React Form Simple** 内部的 **onChange** 和*value* 传递给 <span><</span>Custom /> 控件。
<code src="../demos/_controller_custom_defineProps.tsx"></code>

### <Mdh>字段嵌套</Mdh>

<code src="../demos/_controller_child.tsx"></code>

### <Mdh >配置统一</Mdh>

如果你的表单控件都有相同的表现行为，比如都不直接返回标准事件对象，那么逐个配置会显得过于繁琐，特别是在表单元素过多的情况下。因此，我们可以在 useForm 中传入统一的配置来简化操作。

如果某个表单控件具有不同的行为，你可以为它单独配置，此时该配置的优先级高于 useForm 中的统一配置。

<code src="../demos/_controller_config_format.tsx"></code>
