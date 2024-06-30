---
nav: 
  title: TS
  order: 3
title: FormItem
order: 100


---

# FormItem 
<embed src="./embed/_FormItem.md"></embed> 

```jsx | pure

export type FormItemProps = {
  rules: Rules | Rules[]
  bindId: any
  onError: ((msg: string, name?: string) => void)
  customErrTips: boolean
  defaultValue: any
  requireIndicator: boolean | ReactNode
  label: ReactNode
  getContent: (options: Options) => ReactNode
  initialValue: any
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
  readOnlyText: ReactNode | (() => ReactNode)
  formatChangeValue: (e: any) => any
  noStyle: boolean
}


```

