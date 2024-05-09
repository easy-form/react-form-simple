---
title: 文档
# nav: 文档
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
- 可以轻易集成在你的 UI 或者 第三方库中。
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

只需要两行代码便能创建一个受控表单项。下面的例子展示了 useForm 的用法。 并在加载完 2s 后, 改变输入框的值。

useForm 暴露出的 _model_ 表单模型数据永远是最新的, 在表单提交的操作中, 这个变量将非常有用, 但是不要用它来在表单外部渲染, 它不会重新引起视图的刷新, 即使的它的值是最新的。

更多*render*配置请看<a href="/intro/api#useform">useForm 参数</a>
<code src="../demos/_controller.tsx"></code>

## <Mdh version="1.5.1">基于函数的受控</Mdh>

使用基于函数的受控，可以更加灵活的组织表单项的受控逻辑，在定制化表单项或者需要手动处理或管理某些状态的时候这将非常有用。

基于函数的受控在`1.5.1` 版本(包含`1.5.1`)之后支持。
<code src="../demos/_controller_fn.tsx"></code>
。
:::info{title=info}
将 _attrs_ 传给受控组件之后，基于函数的受控和基于组件的直接受控这两者的表现行为将会完全一致，不同的是基于函数受控可以做到更加精确化和定制化的设置。打印 restOptions 查看更多 API。
:::

## <Mdh>订阅最新值</Mdh>

使用 _useSubscribe_ 来订阅表单项或者整个表单的值。这会将所订阅的值实时渲染在视图里。但是不推荐在父级组件中来订阅, 因为这会引起整个渲染树的更新, 推荐的做法是只用在需要订阅的地方, 可以通过 props 透传, 也可以将它注入到全局状态管理中。
<code src="../demos/_controller_sub.tsx"></code>

## <Mdh>监听表单</Mdh>

使用 _useWatch_ 监听表单变化。

更多介绍请看 <a href="/intro/api#useform">useForm</a>
<code src="../demos/_watch.tsx"></code>

## <Mdh>表单校验</Mdh>

传入 _rules_ 校验规则就可以对表单项进行校验。

可以给 render 的 options 参数传入 _trigger_ 属性以让表单项支持更多的校验方式。
支持的校验方式有：

- change
- blur
- manual

默认值是 `change`

<code src="../demos/_vaild.tsx"></code>

## <Mdh>集成第三方 ui</Mdh>

你可以将 **react-form-simple** 用于你项目中所用到的任何 UI 库中，只要你的 UI 控件接收 **value** 和 **onChange**。 即使你的 UI 控件不接收 **value** 和 **onChange**， 你也能在外面利用 _defineProps_ 做一层属性转换来传给你的自定义 UI 控件。或者定制化你的 useForm。

下面是集成 **material-ui** 和 **Ant Design** 的例子。

#### 集成 material-ui

下面是一个集成 **material-ui** 的例子。只需要将控件传给 render 就可。

在例子中，给 name 表单项传入了不为空的校验，当值为空的时候，会有错误提示且输入框会变红。

<code src="../demos/_ui.tsx"></code>

#### <div style="margin-top: 15px">集成 Ant Design</div>

下面是一个集成 **Ant Design** 的例子。只需要将控件给 render 就行。

同样的，给 name 表单项传入了不为空的校验，当值为空的时候，会有错误提示且输入框会变红。

<code src="../demos/_ui_antd.tsx"></code>

## <Mdh>动态表单</Mdh>

通过直接给数组赋值, 然后调用 _forceUpdate_ 方法手动刷新视图实现动态表单。调用 _forceUpdate_ 方法的目的是因为直接改变 model 的数据不会在表单外部引起视图重新渲染。
<code src="../demos/_dymic.tsx"></code>

还可以不调用 forceUpdate 方法，用另外一种方法也可以实现动态表单
<code src="../demos/_dymic_01.tsx"></code>

不管是哪种方式，render 方法的第一个参数如果是多层级的话应该都要 以 **.** 分隔

## <Mdh>表单性能测试</Mdh>

<code src="../demos/_performance_test.tsx"></code>
