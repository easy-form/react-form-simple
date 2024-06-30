---
nav: 
  title: TS
  order: 3
title: Attrs
order: 150


---

# Attrs 
<embed src="./embed/_attrs.md"></embed> 

```jsx | pure

export type Attrs = {
  onChange: (e: any, tagType?: "checkbox" | undefined) => void
  onBlur: () => void
  value: any
  readOnly: boolean | undefined
  checked: boolean
}


```

