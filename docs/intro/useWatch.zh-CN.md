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
