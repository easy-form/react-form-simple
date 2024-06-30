---
nav: 
  title: TS
  order: 3
title: FormItemMethod
order: 110


---

# FormItemMethod 
<embed src="./embed/_FormItemMethod.md"></embed> 

```jsx | pure

export type FormItemApis = {
  clearValidate: () => void
  removeValidator: () => void
  setValue: (value?: any) => void
  reapplyValidator: () => void
  setError: (message?: ReactNode) => void
  validate: () => Promise<unknown>
  reset: () => void
}


```

