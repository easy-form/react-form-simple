---
title: 订阅最新值
group:
  title: 文档
  order: 1
order: 3
toc: content
---

# 订阅最新值

使用表单模型数据 _model_ 通过点赋值可以对表单控件进行受控。然而这不会引起整体视图的重新渲染，也就是说在外部无法让它作为一个state状态变量去消费。这也是实现性能优化的一部分。如果你想直接使用 model.xx 在表单项外部渲染最新的值，它可能无法达到预期的效果。

因此，我们可以借助 _useSubscribe_ hook 来解决这个问题。

_useSubscribe_ 采用深度对比算法，也就是说只要新的value和旧的value不管层级多深只要值完全相同那它就不会re-render。

### <Mdh>基本用法</Mdh>

使用 _useSubscribe_ 订阅某个表单控件的值。

<code src="../demos/useSubscribe/_basic.tsx"></code>

### <Mdh version="">订阅多个值</Mdh>

<code src="../demos/useSubscribe/_basic_more.tsx"></code>

### <Mdh version="">订阅整个模型</Mdh>

<code src="../demos/useSubscribe/_basic_model.tsx"></code>

### <Mdh version="">表单项联动</Mdh>

<code src="../demos/useSubscribe/_linkage.tsx"></code>

### <Mdh version="1.5.2">全局 hook</Mdh>

提供全局的 useSubscribe，其行为与 form.useSubscribe 一致，但是全局的 useSubscribe 需要提供定义的 contextProps 属性。
<code src="../demos/useSubscribe/_global_sub.tsx"></code>

### <Mdh version="">用作依赖</Mdh>

_useSubscribe_ 返回一个 React 状态变量，因此你甚至可以将它用作 useMemo、useEffect、useCallback 等 React Hook 的依赖项。 <code src="../demos/useSubscribe/_effect.tsx"></code>
