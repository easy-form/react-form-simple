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
