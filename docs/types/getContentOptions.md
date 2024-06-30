---
nav: 
  title: TS
  order: 3
title: GetContentOptions
order: 140


---

# GetContentOptionsType 
<embed src="./embed/_getContentOptions.md"></embed> 

```jsx | pure

export type GetContentOptions = {
  model: Record<string, any>
  bindId: string
  isError: boolean
  errorMessage: ReactNode
  attrs: Attrs
  clearValidate: () => void
  removeValidator: () => void
  setValue: (value?: any) => void
  reapplyValidator: () => void
  setError: (message?: ReactNode) => void
  validate: () => Promise<unknown>
  reset: () => void
}


```

