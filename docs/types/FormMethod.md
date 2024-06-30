---
nav: 
  title: TS
  order: 3
title: FormMethod
order: 90


---

# FormMethod 
<embed src="./embed/_FormMethod.md"></embed> 

```jsx | pure

export type FormApis = {
  clearValidate: (bindId?: string | string[]) => void
  removeValidator: (bindId?: string | string[]) => void
  reapplyValidator: (bindId?: string | string[]) => void
  setValue: (bindId: any, value: any) => void
  setError: (bindId: string | string[], message?: React.ReactNode) => void
  validate: () => Promise<unknown>
  reset: () => void
}


```

