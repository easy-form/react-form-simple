---
title: 表单基础设置
group:
  title: 文档
  order: 1
order: 8
toc: content
---

# 表单基础设置

React form simple 内部集成了一套默认的布局系统，对于快速创建表单应用非常有用。

### <Mdh>标签位置</Mdh>

通过给 render 传入 _labelPosition_ 配置项，可以控制标签的相对位置。_labelPosition_ 接收的值有 `row` 和 `top`，默认值为 row。
<code src="../demos/layout/_labelPosition.tsx"></code>

### <Mdh>表单方向</Mdh>

表单的整体方向分为 `row` 和 `column` 两种布局方式，我们可以通过引入 Form 组件来控制。Form 组件默认使用 column 布局。

<code src="../demos/layout/_form_dir.tsx"></code>

### <Mdh version="">布局组合</Mdh>

通过结合使用 labelPosition 和 direction 配置项，可以灵活地控制表单的布局：

- labelPosition 控制标签的相对位置，接收的值有 row 和 top，默认值为 row。
- direction 控制表单的整体方向，接收的值有 row 和 column，默认使用 column 布局。

<code src="../demos/layout/_layout_combination.tsx"></code>

### <Mdh>设置原子样式</Mdh>

*React Form Simple*提供了对各类原子区域样式的控制，包括设置类名和样式。开发人员可以覆盖这些默认样式，也可以在外部自行编写样式。

打开浏览器调试工具，查看和调整设置的样式。
<code src="../demos/layout/_set_atom_style.tsx"></code>

### <Mdh>统一配置</Mdh>

如果表单元素较多，可以将 render 的公共配置提升到 useForm 的配置参数中，这样可以统一为每个 render 设置相同的配置。

<code src="../demos/layout/_unify.tsx"></code>

### <Mdh>无样式</Mdh>

设置 `noStyle` 为 true 可以让表单项没有任何样式，并且表单控件将不再被容器包裹。这个配置项可以统一进行设置。

打开浏览器调试工具查看渲染结果。
<code src="../demos/layout/_noStyle.tsx"></code>

### <Mdh>自定义必填指示器</Mdh>

设置 requireIndicator 为 true 可以显示表单必填项指示器，同时也支持自定义必填项指示器。
<code src="../demos/layout/_requireIndicator.tsx"></code>

### <Mdh>只读表单</Mdh>

<code src="../demos/layout/_readOnly.tsx"></code>

#### 可以单独设置每一项的只读

<code src="../demos/layout/_readOnly_simple.tsx"></code>

### <Mdh>只读状态内容</Mdh>

通过设置 _readOnlyText_，readOnly 状态的表单项指定显示内容。该配置可以单独设置，也可以统一设置。
<code src="../demos/layout/_readOnly_content.tsx"></code>
