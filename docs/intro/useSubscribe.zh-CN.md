---
title: 订阅最新值
group:
  title: 文档
  order: 1
order: 3
toc: content
---

# 订阅最新值

使用表单模型数据 _model_ 通过点赋值可以对表单控件进行受控。然而，这不会引起整体视图的重新渲染，从而实现性能优化的一部分。如果你直接使用 model.xx 在表单项外部渲染最新的值，它可能无法达到预期的效果。

因此，我们可以借助 _useSubscribe_ hook 来解决这个问题。

### <Mdh>基本用法</Mdh>

使用 _useSubscribe_ 订阅某个表单控件的值。

<code src="../demos/useSubscribe/_basic.tsx"></code>

### <Mdh version="">订阅多个值</Mdh>

<code src="../demos/useSubscribe/_basic_more.tsx"></code>

### <Mdh version="">订阅整个模型</Mdh>

<code src="../demos/useSubscribe/_basic_model.tsx"></code>

### <Mdh version="">表单项联动</Mdh>

<code src="../demos/useSubscribe/_linkage.tsx"></code>

### <Mdh version="">用作依赖</Mdh>

_useSubscribe_ 返回一个 React 状态变量，因此你甚至可以将它用作 useMemo、useEffect、useCallback 等 React Hook 的依赖项。 <code src="../demos/useSubscribe/_effect.tsx"></code>
