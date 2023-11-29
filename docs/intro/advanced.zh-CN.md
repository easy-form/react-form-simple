---
title: 进阶用法
order: 1
# nav: 进阶用法
---

## <Mdh>组件形式</Mdh>

文档之前提到的用法已经满足大多数场景。但是在习惯用组件形式来渲染视图的开发人员来说，可以使用 **Form** 或者 **FormItem** 来更加直观的渲染页面。

**react-form-simple** 暴露出了两个组件 **Form** 和 **FormItem** 来提供给开发人员使用组件形式来创建表单。在需要定制化表单，或者处理一些额外的逻辑的时候，这两个组件将非常有用。

在定制化表单的时候，只需要要创建一个普通对象按照约定传给 **Form** 或者 **FormItem** 就可以使你的表单正常工作和受控。你可以基于此创建属于开发人员自己的 _useForm_。

另外，render 方法可以和 _Form_ 和 _FormItem_ 一起自由组合搭配使用。

下面的例子展示了 **FormItem** 的基本用法。

**FormItem** 接收的 prop 与 render 函数接收的参数几乎是等价的。不同的是, render 函数的第一个参数就是 **FormItem** 的 bindId，第二个参数才是 **FormItem** 的 prop。

另外, 下面的 **getContent** 方法返回的参数就是 render 的 **defineProps** 方法 (用法请看[集成第三方 ui](/intro/introduce#集成第三方-ui))返回的参数。参数会返回表单项的一些状态和值。使用 **FormItem** 时可以在 **getContent** 应用这些状态和值，使用 render 函数时可以在 defineProps 里应用这些状态和值，来做你任何想做的事。

说白了, render 方法就是对 _FormItem_ 组件的集成。

下面的例子展示了 **Form** 的基本用法。
<code src="../demos/_basic_formItem.tsx"></code>

#### Form 用法

**Form** 接收的 Prop 几乎在 FormItem 也能接收。如果在两者传了相同的 Prop，后者会覆盖前者。

将 FormItem 包裹在 **Form** 里，可以对 FormItem 进行集中的管理。通过传入 **Form** 组件上的 direction 属性可以设置整个表单的布局方向。

表单的布局方向有：

- row
- column

默认为 `row`

<code src="../demos/_basic_form.tsx"></code>

## <Mdh>组件校验</Mdh>

传入 **bindId** 和 **rules** 就可对表单项进行校验。

**bindId** 是用来标识该表单项项的唯一, 要使表单项受控, **bindId** 是必须的。一旦传入 **bindId**, 组件内部就会维护它自身的所有状态。

表单项受控后，开发者在外部不需要关心受控的过程和逻辑。开发者需要做的, 就是将这些状态如何在外部应用。

**注意：** 如果有多个表单项需要校验，那就需要定义多个 ref。如果需要统一校验，可以使用 Form 组件将它们包裹。

<code src="../demos/_formItem_vaild.tsx"></code>

#### 使用 Form 组件包裹校验多个 FormItem

<code src="../demos/_form_vaild.tsx"></code>

## <Mdh>外部受控</Mdh>

通过传入 **contextProps** 可以将组件与 useForm 关联起来。

使用了 useForm 后，可以将组件的校验等操作提升到 useForm 暴露出的 api 调用。
<code src="../demos/_formItem_controll.tsx"></code>

#### Form 受控

上面所展示的例子需要每个 FormItem 传入一个 contextProps 才能使它在外部受控。可以将 contextProps 提升到 Form 组件传入。

<code src="../demos/_form_controller.tsx"></code>

## <Mdh>组合使用</Mdh>

在渲染一个表单的时候，可以使用 render 函数单独渲染，可以使用 FormItem 单独渲染，甚至可以将它们都包裹在一个 **Form** 里，这完全取决于你的个人喜好和需求。
<code src="../demos/_combination.tsx"></code>

## <Mdh>定制化表单</Mdh>

你可以传入一个普通的表单对象完全自定义表单的受控逻辑来定制化你的表单，而无需依赖于 **useForm** hook。

下面的例子展示了对 Form 组件包裹的 FormItem 组件整体定制化的基本用法。

你可以将 FormItem 单独提取出来定制化，因为 Form 组件不是必需的。
<code src="../demos/_custom.tsx"></code>
