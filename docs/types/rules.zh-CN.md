---
nav: 
  title: TS
  order: 3
title: Rules
order: 120


---

# Rules 
<embed src="./embed/_Rules.md"></embed> 

```jsx | pure

export type Rules = {
  required: string | boolean
  validator: ((value: any) => string | number | boolean | null)
}


```

