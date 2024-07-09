---
title: 表单监听
group:
  title: 文档
  order: 1
order: 4
toc: content
---

# 表单监听

_React Form Simple_ 提供表单监听操作，对于在某些表单项字段变化后需要处理特定逻辑的情况非常有用。

### <Mdh>基本用法</Mdh>

使用 _useWatch_ 监听某个字段的变化。

<code src="../demos/useWatch/_basic.tsx"></code>

### <Mdh>监听多个字段</Mdh>

_useWatch_ 的第一个参数是一个返回集合的函数，可以用于监听多个字段。第一个参数返回的类型决定了其回调参数的类型，这两个类型将是相同的。

<code src="../demos/useWatch/_more.tsx"></code>

### <Mdh>监听 model</Mdh>

同样的，它还能用于监听整个表单模型。
<code src="../demos/useWatch/_model.tsx"></code>

## 监听数组

### <Mdh>监听整个数组</Mdh>

数组中的任意一项发生变化，都会触发回调。
<code src="../demos/useWatch/_array.tsx"></code>

### <Mdh>监听某一项</Mdh>

<code src="../demos/useWatch/_array_item.tsx"></code>

### <Mdh version="1.5.2">全局 hook</Mdh>

提供全局的 useWatch，其行为与 form.useWatch 一致，但是全局的 useWatch 需要提供定义的 contextProps 属性。
<code src="../demos/useWatch/_global_use.tsx"></code>

### <Mdh version="1.5.2">watch</Mdh>

提供基于函数的 watch 监听。与 hook 的区别在于它可以在任意地方调用，但需要提供一个唯一且在当前组件周期中不变的 key。在组件销毁时，某些情况下可能需要手动取消监听。在大多数情况下，表现正常，但如果不销毁，可能会导致一些无法预料的问题。
<code src="../demos/useWatch/_watch.tsx"></code>
