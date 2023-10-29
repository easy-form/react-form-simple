---
title: 介绍
---

## <Mdh>快速入门</Mdh>

适用于在[react](https://react.dev/) 里进行表单操作的一个高性能, 灵活, 可扩展的表单库。

#### 为什么使用 react-form-simple?

- 通过创建一个可观察对象来观察表单的模型操作, 表单项的受控直接通过`_.` 赋值。
- 简单几行代码就可以完成表单受控, 无需关心受控逻辑, 无需关心受控过程, 只需要知道受控结果和如何应用你的受控状态。
- 每个表单项之间的渲染自动完全隔离, 不需要自行组织组件隔离。这将能够更快的处理表单输入后的响应速度, 以及很大程度的避免在大型动态数据下造成的页面卡顿。
- 具有数据观测功能, 可以在某些场景下对整个表单或者某个具体的表单项进行单一或者统一的观察监测, 可以在你需要用表单项最新的值进行渲染的地方进行值的订阅。
- 灵活的使用方式, 灵活的页面布局组合, 开发者可以根据自己的喜好和场景使用某种方式以及内置布局。在大多数场景下, 无需开发者手动布局。
- 简约的 API 设计, 在操作表单的过程中, 简单的只需要引入两个 API, 就可以完成大部分工作。
- 高度可扩展的表单接口, 在一些复杂需求或者定制化场景中, 开发者可以自行定制表单的控制逻辑。
- 能轻易集成在基于 react 的 ui 库中。
- 完整的类型推断。

#### 安装

只要一个命令, 就可使用 `react-form-simple`

```
npm install react-form-simple
```

#### 例子

下面的代码是一个简单的受控表单例子
<code src="../demos/_example.tsx"></code>
:::info{ title=info }
控件的样式是基于文档的, 并非**react-form-simple**内置的样式, **react-form-simple**不关心控件的样式。
:::

## <Mdh>受控输入</Mdh>

只需要两行代码便能创建一个受控表单项。下面的例子展示了 useForm 的用法。 useForm 暴露出的 **modal** 模型数据永远是最新的, 在表单提交的操作中, 这个变量将非常有用, 但是不要用它来渲染, 它不会重新引起视图的刷新, 即使的它的数据是最新的。
<code src="../demos/_controller.tsx"></code>

## <Mdh>订阅最新值</Mdh>

使用 useSubscribe 来订阅整个表单的更新。这会将所订阅的值实时渲染在视图里。但是不推荐在父级组件中来订阅, 因为这会引起整个渲染树的更新, 推荐的做法是将它订阅在只需要用到的组件中, 可以通过 props 透传, 也可以将它注入到全局状态管理中
<code src="../demos/_controller_sub.tsx"></code>

## <Mdh>监听表单</Mdh>

使用**useWatch**监听表单变化。
<code src="../demos/_watch.tsx"></code>

## 校验

<code src="../demos/_vaild.tsx"></code>

## <Mdh>组件用法</Mdh>

**react-form-simple** 暴露出两个组件`Form`和`FormItem`来提供给开发人员使用组件形式来创建表单。
<code src="../demos/_basic_formItem.tsx"></code>
可以传入 **ref** 和 **bindId** 对 FormItem 里的内容进行校验和赋值。bindId 是用来标识 FormItem 项的唯一, 要使 FormItem 受控, bindId 是必须的。一旦传入 bindId, 组件内部就会维护它自身的所有状态

<code src="../demos/_controll_formItem.tsx"></code>

可以看到, 传入了 bindId 和 rule, 表单项项会自动进行校验。 FormItem 会自动将内部的状态变成可受控的, 在外部根本不需要关系受控过程。开发者需要做的, 就是将这些状态如何应用。
