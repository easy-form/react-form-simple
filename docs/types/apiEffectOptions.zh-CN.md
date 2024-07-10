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
  setValue: (value?: any) => void
  clearValidate: (bindId?: string | string[]) => void
  removeValidator: (bindId?: string | string[]) => void
  reapplyValidator: (bindId?: string | string[]) => void
  setError: (bindId: string | string[], message?: React.ReactNode) => void
  validate: (bindId?: string | string[] | undefined) => Promise<unknown>
  reset: () => void
}


```

