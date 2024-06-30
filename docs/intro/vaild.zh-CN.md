---
title: 表单校验
group:
  title: 文档
  order: 1
order: 5
toc: content
---

# 表单校验

### <Mdh>基本用法</Mdh>

调用 _validate_ 函数进行表单校验。validate 函数将返回一个 Promise。以下是一个简单的非空校验示例，通过给 render 传入一个 rules 配置即可校验该表单。

_requireIndicator_ 属性为必填项指示器，表明该表单项为必填项。
<code src="../demos/vaild/_basic.tsx"></code>

### <Mdh>校验方式</Mdh>

给 render 的 options 参数传入 trigger 属性以让表单项支持更多的校验方式。 支持的校验方式有：

- change（onChange 的时候触发）
- blur（onBlur 的时候触发）
- manual（手动调用 validate 函数触发）

默认值是 change。
<code src="../demos/vaild/_trigger.tsx"></code>

### <Mdh>统一配置</Mdh>

如果你的表单项都需要 _blur_ 或者 _manual_ 的校验方式，你可以将 render 的配置提升到 useForm 中。

以 _blur_ 的方式校验表单。
<code src="../demos/vaild/_trigger_config.tsx"></code>

### <Mdh>自定义校验规则</Mdh>

对于复杂表单的校验，单单传入 _required_ 并不能满足需求，比如需要校验正则表达式或输入的字符长度。而 _validator_ 可以很好地解决这个问题。对于不满足校验条件的情况，你可以返回一段错误描述，它可以是字符串，也可以是一个 React 组件，这完全取决于你。当满足条件时，你需要返回 null、false 或者一个空字符串。

_React Form Simple_ 不提供预定义的校验规则（除了为空校验），因为这不符合轻量化设计原则。预定义规则会导致库变得繁琐和复杂。因此，对于复杂的校验，你需要手写规则或借助第三方校验库进行集成（如下例所示），或者你可以在 render 函数之上封装一层校验规则。

<code src="../demos/vaild/_custom.tsx"></code>

### <Mdh>集成第三方校验</Mdh>

_React Form Simple_ 可以很好地与你使用的第三方校验库集成（假设你正在使用第三方校验库）。因此，如果你在现有代码中使用 _React Form Simple_，它不会对你现有的结构造成破坏性的变更。

借助 _setError_ API，可以将表单的校验与你使用的第三方校验库很好地集成。_setError_ 接收一个表单字段和一段错误描述的字符串或者组件。如果传给 _setError_ 函数的参数是一段有意义的字符串或者组件，它会触发库内部的校验，其表现行为与库内部的校验完全一致。

_请注意_，_setError_ 的优先级高于库内部的校验优先级。也就是说，如果调用 _setError_ 并传入了一段错误描述，除非你在后面再次调用 _setError_ 并传入空的描述，否则这个组件的校验状态将一直是未通过的状态。只有当 _setError_ 的校验通过后，库内部的 _rules_ 校验才会继续执行。

下面是一个集成 _Joi_ 的基础示例。

<code src="../demos/vaild/_integration.tsx"></code>

### <Mdh>设置错误通知样式</Mdh>

通过设置 _errorStyle_ 和 _errorClassName_ 来自定义错误通知的展示样式。以下示例通过设置 _errorStyle_ 来实现样式的更改。
<code src="../demos/vaild/_error_style.tsx"></code>

### <Mdh>清除校验</Mdh>

调用 _clearValidate_ 方法可以清除表单项的校验信息。该方法会将表单项的校验状态重置为初始状态。它接收一个表单项字段参数，可以是一个字符串或字符串数组。
<code src="../demos/vaild/_clearValidate.tsx"></code>

### <Mdh>移除校验器</Mdh>

调用 _clearValidate_ 方法可以清除表单项的校验信息，并将其状态重置为初始状态。在下一次校验时，这些表单项仍会被校验。如果你希望在下一次校验时不再校验这些表单项，需要移除校验器 _removeValidator_。_removeValidator_ 也接收一个参数用于移除该表单项或者整个表单的校验器。
<code src="../demos/vaild/_removeValidator.tsx"></code>

### <Mdh>重新申请校验器</Mdh>

调用 _removeValidator_ 可以移除表单项的校验器。如果后续需要重新进行校验，可以调用 _reapplyValidator_ 方法重新应用该表单项或整个表单的校验器。该 API 通常与 _removeValidator_ 配合使用。
<code src="../demos/vaild/_reapplyValidator.tsx"></code>

### <Mdh>过滤表单项</Mdh>

借助 _removeValidator_ 和 _reapplyValidator_，可以选择性地在当前校验中校验某些字段。然而，这有时并不方便。为了解决这个问题，我们可以动态控制 _rules_，以实现选择性校验。

如下示例所示，点击 draft 按钮时不进行校验，而点击 submit 按钮时才进行校验。
<code src="../demos/vaild/_rules_select.tsx"></code>

### <Mdh>错误回调</Mdh>

<code src="../demos/vaild/_callback.tsx"></code>

### <Mdh>自定义错误通知</Mdh>

有时候我们希望自定义错误通知的展示方式。通过设置 _customErrTips_ 属性，库内部将不再默认提供错误通知的展示，此时需要手动将其呈现在视图上。

基于上述示例中的 _onError_ 错误回调函数和 _customErrTips_，我们可以获取错误通知并将其存储起来，以便在其他视图中展示。然而，我们似乎有一种更好的方式来实现这一点。
<code src="../demos/vaild/_custom_tips.tsx"></code>

### <Mdh version="1.5.1">定制化</Mdh>

基于函数式受控，每个表单项都可以独立控制其校验、清除校验和移除校验的时机。借助这些 API，可以为每个表单项实现定制化和独特的控制逻辑。
<code src="../demos/vaild/_moment.tsx"></code>
