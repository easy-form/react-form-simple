---
nav: 
  title: TS
  order: 3
title: UseFormReturn
order: 10


---

# UseFormReturnType 
<embed src="./embed/_useFormReturn.md"></embed> 

```jsx | pure

export type UseFormReturnType<T> = {
  render: (bindId: any, [config]) => (parameter: ReactNode | (args: RenderFnReturnFnCallbackArgTypes) => ReactNode) => ReactNode
  useSubscribe: UseSubscribe<T>(({ model }) => any)
  useWatch: UseWatch<T>(({ model }) => string | string[], (value, preValue) => void)
  model: T
  setState: React.Dispatch<React.SetStateAction<undefined>>
  forceUpdate: (delay?: boolean | undefined) => void
  setValues: (values: Record<string, any>) => void
  clearValidate: (bindId?: string | string[]) => void
  removeValidator: (bindId?: string | string[]) => void
  reapplyValidator: (bindId?: string | string[]) => void
  setValue: (bindId: any, value: any) => void
  setError: (bindId: string | string[], message?: React.ReactNode) => void
  validate: () => Promise<unknown>
  reset: () => void
  contextProps: ContextProps
}


```

