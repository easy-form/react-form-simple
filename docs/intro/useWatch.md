---
title: Watch
group:
  title: Docs
  order: 1
order: 4
toc: content
---

# Form Watch

**React Form Simple** provides form watch functionality, which is very useful for handling specific logic when certain form fields change.

### <Mdh>Basic Usage</Mdh>

Use **useWatch** to monitor changes in a specific field.

<code src="../demos/useWatch/_basic.tsx"></code>

### <Mdh>Watching Multiple Fields</Mdh>

The first parameter of **useWatch** is a function that returns a collection, which can be used to watch multiple fields. The type returned by the first parameter determines the type of its callback parameter, and these two types will be the same.

<code src="../demos/useWatch/_more.tsx"></code>

### <Mdh>Watching Model</Mdh>

Similarly, it can also be used to watch the entire form model.
<code src="../demos/useWatch/_model.tsx"></code>

## Watching List

### <Mdh>Watch the entire</Mdh>

Any change in the array will trigger the callback.
<code src="../demos/useWatch/_array.tsx"></code>

### <Mdh>Watch a specific item</Mdh>

<code src="../demos/useWatch/_array_item.tsx"></code>

### <Mdh version="1.5.2">Global Hook</Mdh>

Provides a global useWatch, which behaves the same as form.useWatch, but the global useWatch requires the defined contextProps property.
<code src="../demos/useWatch/_global_use.tsx"></code>

### <Mdh version="1.5.2">watch</Mdh>

Provides function-based watch monitoring. The difference from hook is that it can be called anywhere, but a unique key that does not change during the current component cycle is required. When the component is destroyed, it may be necessary to manually cancel the monitoring in some cases. In most cases, the performance is normal, but if it is not destroyed, it may cause some unpredictable problems.
<code src="../demos/useWatch/_watch.tsx"></code>
