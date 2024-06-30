---
nav: 
  title: TS
  order: 3
title: ContextProps
order: 60


---

# ContextProps 
<embed src="./embed/_contextProps.md"></embed> 

```jsx | pure

export type ContextProps = {
  mounted: ((options: { uid: string; bindId: any; }) => void)
  apiEffect: (options: Options) => void
  updated: ((options: { uid: string; bindId: any; value: any; }) => void)
  reset: ((options: { uid: string; bindId: any; value: any; }) => void)
  destroy: ((options: { uid: string; bindId: any; }) => void)
}


```

