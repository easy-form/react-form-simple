---
nav: 
  title: TS
  order: 3
title: Form
order: 80


---

# Form 
<embed src="./embed/_form.md"></embed> 

```jsx | pure

export type FormProps = {
  errorStyle: CSSInterpolation
  errorClassName: string
  labelPosition: "row" | "top"
  labelStyle: CSSInterpolation
  labelWidth: string | number
  labelClassName: string
  formItemStyle: CSSInterpolation
  formItemClassName: string
  trigger: "change" | "blur" | "manual" | ("change" | "blur" | "manual")[]
  contentStyle: CSSInterpolation
  contentClassName: string
  fullWidth: boolean
  contextProps: ContextProps
  readOnly: boolean
  readOnlyText: (() => ReactNode) | ReactNode
  formatChangeValue: (e: any) => any
  noStyle: boolean
  formStyle: CSSInterpolation
  formClassName: string
  direction: "row" | "column"
}


```

