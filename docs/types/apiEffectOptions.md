---
nav: 
  title: TS
  order: 3
title: ApiEffectOptions
order: 70


---

# ApiEffectOptions 
<embed src="./embed/_apiEffectOptions.md"></embed> 

```jsx | pure

export type ApiEffectOptions = {
  bindId: any
  uid: string
  clearValidate: (bindId?: string | string[]) => void
  removeValidator: (bindId?: string | string[]) => void
  reapplyValidator: (bindId?: string | string[]) => void
  setValue: (bindId: any, value: any) => void
  setError: (bindId: string | string[], message?: React.ReactNode) => void
  validate: () => Promise<unknown>
  reset: () => void
}


```

