---
title: 集成第三方UI
group:
  title: 文档
  order: 1
order: 6
toc: content
---

# 集成第三方 UI

*React Form Simple*不会对现有代码造成破坏性的变更。在你的项目中，它能够轻松与所使用的 UI 库集成。

### <Mdh>集成 material-ui</Mdh>

下面是一个集成 Material-UI 的示例。该示例包含了下拉框、输入框、复选框等表单元素，并给名为 name 的表单项定义了不为空的校验规则。当 name 表单项的值为空时，将提示错误通知，并将输入框的颜色变为错误的红色。
<code src="../demos/integrationUI/_material-ui.tsx"></code>

### <Mdh>集成 Ant Design</Mdh>

_注意_，Select 组件的 render 配置项传入了 formatChangeValue 函数，这是因为 Ant Design 的 Select 组件在 onChange 事件中返回的不是标准事件对象，而是一个具体的值。
<code src="../demos/integrationUI/_antd.tsx"></code>
