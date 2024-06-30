---
nav: 
  title: TS
  order: 3
title: RenderConfigTypes
order: 30


---

# RenderConfigTypes 
<embed src="./embed/_RenderConfigType.md"></embed> 

```jsx | pure

export type RenderConfigType = {
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
  defineProps: ((options: GetContentOptions) => Record<string, any>)
}


```

