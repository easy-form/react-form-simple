---
title: 动态表单
group:
  title: 文档
  order: 1
order: 7
toc: content
---

# 动态表单

### <Mdh version="">基本用法</Mdh>

通过直接操作 JavaScript 方法即可实现动态表单，开发人员无需关心数组的具体项或如何控制某一项。只需在操作完数组后调用 _forceUpdate_ 方法，即可实现动态视图的刷新。
<code src="../demos/dymic/_basic.tsx"></code>

也可以手动实现 _forceUpdate_:

```jsx | pure
import React, { useCallback, useState } from 'react';

export const useForceUpdate = () => {
  const [, setState] = useState({});
  const forceUpdate = useCallback(() => {
    setState({});
  }, []);
};
```

### <Mdh version="">订阅数组</Mdh>

使用 useSubscribe 可以订阅整个数组或其中某一项的变化。下述示例展示订阅数组第一项的变化。
<code src="../demos/dymic/_subscribe.tsx"></code>

### <Mdh version="">观察数组</Mdh>

使用 useWatch 观察整个数组或其中某些项的变化。下述示例展示观察数组第一项和第二项的变化。
<code src="../demos/dymic/_watch.tsx"></code>

## 数组项操作

### <Mdh version="">基于 onChange 事件</Mdh>

下面示例基于 onChange 事件去触发 amount 的更新，根据 unit 和 rate 计算出 amount，并借助函数式受控渲染当前项 amount。
<code src="../demos/dymic/_operate.tsx"></code>

### <Mdh version="">基于 useSubscribe 订阅 </Mdh>

使用 useSubscribe 订阅当前项，当 unit 和 rate 发生变化，算出 amount。
<code src="../demos/dymic/_operate_useSubscribe.tsx"></code>

### <Mdh version="">动态数组性能</Mdh>

让我们一次性添加 500 条，并随机挑选输入框输入。在这里，我们引入了一个新的 API _Form_ 组件，它虽然不是必需的，但对于表单布局非常有用。下述示例的布局实现主要有两个要点：

- 设置标签的位置为顶部。
- 使用 Form 组件，将表单布局方向设置为水平方向（row）

<code src="../demos/dymic/_performance_test.tsx"></code>
