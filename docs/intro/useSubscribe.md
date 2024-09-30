---
title: Subscribe
group:
  title: Docs
  order: 1
order: 3
toc: content
---

# Subscribe to latest value

Using form model data **model** to control form controls through point assignment. However, this will not cause the entire view to be re-rendered, which means that it cannot be consumed as a state variable externally. This is also part of achieving performance optimization. If you want to directly use model.xx to render the latest value outside the form item, it may not achieve the expected effect.

Therefore, we can use **useSubscribe** hook to solve this problem.

**useSubscribe** uses a deep comparison algorithm, which means that as long as the new value and the old value are exactly the same, no matter how deep the hierarchy is, it will not re-render.

### <Mdh>Basic Usage</Mdh>

Use **useSubscribe** to subscribe to the value of a form control.

<code src="../demos/useSubscribe/_basic.tsx"></code>

### <Mdh version="">Subscribing to multiple values</Mdh>

<code src="../demos/useSubscribe/_basic_more.tsx"></code>

### <Mdh version="">Subscribe to the entire model</Mdh>

<code src="../demos/useSubscribe/_basic_model.tsx"></code>

### <Mdh version="">Form item linkage</Mdh>

<code src="../demos/useSubscribe/_linkage.tsx"></code>

### <Mdh version="1.5.2">Global Hook</Mdh>

Provides a global useSubscribe, which behaves the same as form.useSubscribe, but the global useSubscribe requires the defined contextProps property.
<code src="../demos/useSubscribe/_global_sub.tsx"></code>

### <Mdh version="">Use as dependency</Mdh>

**useSubscribe** returns a React state variable, so you can even use it as a dependency for React Hooks like useMemo, useEffect, useCallback, etc.
<code src="../demos/useSubscribe/_effect.tsx"></code>
