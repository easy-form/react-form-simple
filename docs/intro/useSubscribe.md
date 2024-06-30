---
title: Subscribe
group:
  title: Docs
  order: 1
order: 3
toc: content
---

# Subscribe to latest value

Using form model data **model** to control form controls through dot assignment. However, this will not cause the entire view to be re-rendered, thus achieving part of the performance optimization. If you directly use model.xx to render the latest value outside the form item, it may not achieve the expected effect.

Therefore, we can use the **useSubscribe** hook to solve this problem.

### <Mdh>Basic Usage</Mdh>

Use **useSubscribe** to subscribe to the value of a form control.

<code src="../demos/useSubscribe/_basic.tsx"></code>

### <Mdh version="">Subscribing to multiple values</Mdh>

<code src="../demos/useSubscribe/_basic_more.tsx"></code>

### <Mdh version="">Subscribe to the entire model</Mdh>

<code src="../demos/useSubscribe/_basic_model.tsx"></code>

### <Mdh version="">Form item linkage</Mdh>

<code src="../demos/useSubscribe/_linkage.tsx"></code>

### <Mdh version="">Use as dependency</Mdh>

**useSubscribe** returns a React state variable, so you can even use it as a dependency for React Hooks like useMemo, useEffect, useCallback, etc.
<code src="../demos/useSubscribe/_effect.tsx"></code>
