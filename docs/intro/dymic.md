---
title: Dymic Form
group:
  title: Docs
  order: 1
order: 7
toc: content
---

# Dymic Form

### <Mdh version="">Basic Usage</Mdh>

By directly manipulating JavaScript methods, developers can implement dynamic forms without worrying about the specifics of array items or how to control a particular item. Simply call the **forceUpdate** method after manipulating the array to refresh the dynamic view.

<code src="../demos/dymic/_basic.tsx"></code>

You can also manually implement **forceUpdate**:

```jsx | pure
import React, { useCallback, useState } from 'react';

export const useForceUpdate = () => {
  const [, setState] = useState({});
  const forceUpdate = useCallback(() => {
    setState({});
  }, []);
};
```

### <Mdh version="">Subscribe List</Mdh>

You can use **useSubscribe** to subscribe to changes in the entire array or a specific item within it. The following example demonstrates subscribing to changes in the first item of the array.

<code src="../demos/dymic/_subscribe.tsx"></code>

### <Mdh version="">Watch</Mdh>

You can use **useWatch** to observe changes in the entire array or specific items within it. The following example demonstrates observing changes in the first and second items of the array.

<code src="../demos/dymic/_watch.tsx"></code>

## Action

### <Mdh version="">Based on onChange</Mdh>

The following example is based on the onChange event to trigger the update of "amount". It calculates the "amount" based on "unit" and "rate", and renders the current "amount" using functional control.

<code src="../demos/dymic/_operate.tsx"></code>

### <Mdh version="">Based on useSubscribe</Mdh>

Subscribe to the current item using useSubscribe. When "unit" and "rate" change, calculate the "amount".

<code src="../demos/dymic/_operate_useSubscribe.tsx"></code>

### <Mdh version="">Performance</Mdh>

Let's add 500 items at once and randomly input values into the input boxes. Here, we introduce a new API, the **Form** component, which is not essential but very useful for form layout. The layout implementation in the example below mainly focuses on two points:

- Setting the label position to the top.
- Using the Form component to set the form layout direction to horizontal (row).

<code src="../demos/dymic/_performance_test.tsx"></code>
