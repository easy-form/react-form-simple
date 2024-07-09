---
nav: 
  title: TS
  order: 3
title: Watch
order: 160


---

# Watch 
<embed src="./embed/_watch.md"></embed> 

```jsx | pure
export type Watch = (subscribeFun: SubscripeFunType<T>,cb: CallbackType,key: string | symbol) => { unWatch: () => void }
```

