---
title: 函数式受控
group:
  title: 文档
  order: 1
order: 2
toc: content
---

# 函数式受控

在创建表单时，通常会选择[基本](/zh-CN/intro/controller)的直接受控方式。通过直接受控，库会自动收集受控控件的 _onChange_ 和 _value_ 属性。这样一来，开发者无需过多关注受控逻辑，对于快速创建受控表单应用非常方便。

然而，有时我们希望更多的自定义和控制权，而不是依赖库自动处理一切。在这种情况下，函数式受控就显得尤为重要。

### <Mdh version="1.5.1">基本用法</Mdh>

顾名思义，函数式受控允许你以函数的方式创建模型与视图之间的桥梁。如下例所示，函数式受控只需要将 _attrs_ 绑定在表单控件上，便能搭建起视图与模型之间的桥梁。

<code src="../demos/_controller_fn.tsx"></code>

### <Mdh version="1.5.1">自定义组件受控</Mdh>

在开发过程中，我们经常会使用自定义组件或第三方 UI 库。有时候，自定义组件的 _onChange_ 不会输出标准的事件对象，而是某个具体的值。在这种情况下，你可能需要进行以下处理：
<code src="../demos/_controller_fn_custom.tsx"></code>

### <Mdh version="1.5.1">非标准事件对象受控</Mdh>

函数式受控与直接受控的表现行为完全一致。如果自定义组件不直接返回标准事件对象，你可能不想手动嵌套 _onChange({ target: { value: xxxx } })_（如上例所示）。此时，可以借助 _formatChangeValue_ 函数来简化处理。

定义了*formatChangeValue*后，react-form-simple 会使用它的返回值作为最终值:

<code src="../demos/_controller_fn_outside_format.tsx"></code>

### <Mdh version="1.5.1">受控 Checkbox</Mdh>

当处理那些仅接受 true 和 false 值的组件时，通常不适合直接传递一个 value 属性。相反，我们可以使用 `attrs.checked` 来实现受控。
<code src="../demos/_controller_fn_checkBox.tsx"></code>

### <Mdh version="1.5.1">与 defineProps 结合</Mdh>

在直接受控组件中，经常会使用 defineProps 配置来根据表单项状态定义受控控件的 props。不过，采用函数式受控之后，我们可以直接在函数体内定义组件的 props。即便如此，我们仍能够与 defineProps 一起使用。

下面的示例展示了如何使用 defineProps 定义样式，并通过函数式组件的 props 参数将样式应用于表单控件。当输入框有值时，边框会变成绿色，否则保持默认颜色。
<code src="../demos/_controller_fn_props.tsx"></code>

### <Mdh version="1.5.1">定制化</Mdh>

在处理受控组件时，除了返回 attrs 外，还可以提供表单项的多个操作接口，这些接口能够让我们高度定制化组件。
<code src="../demos/_controller_fn_api.tsx"></code>
