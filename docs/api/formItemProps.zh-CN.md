---
nav: 
  title: API
  order: 1
title: Props
order: 1

toc: content
  

group:
  title: FormItem
  order: 2
  
---

# FormItem Props 
### rules
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;rules&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;Rules&quot;},&quot;tags&quot;:{&quot;resetType&quot;:&quot;Rules | Rules[]&quot;,&quot;localKey&quot;:&quot;API.form.global.props.formItem.rules&quot;,&quot;description&quot;:&quot;Form item verification rules, if it is an empty array or has no value, the form item will not be verified.&quot;}}" ></APIWrap>
### bindId
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;bindId&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;any&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.formItem.bindId&quot;,&quot;description&quot;:&quot;The field name bound to the form item is used to identify the uniqueness of the form item&quot;}}" ></APIWrap>
### onError
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;onError&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;((msg: string, name?: string) => void)&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.formItem.onError&quot;,&quot;description&quot;:&quot;Callback function when form item verification fails&quot;}}" ></APIWrap>
### customErrTips
<APIWrap apiInstance="{&quot;defaultValue&quot;:{&quot;value&quot;:&quot;false&quot;},&quot;name&quot;:&quot;customErrTips&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;boolean&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.formItem.customErrTips&quot;,&quot;description&quot;:&quot;Whether to customize error message prompts. If true, the form item will not display error messages by default. will be handled externally&quot;}}" ></APIWrap>
### defaultValue
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;defaultValue&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;any&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.formItem.defaultValue&quot;,&quot;description&quot;:&quot;The default value for the form item content to be displayed&quot;}}" ></APIWrap>
### requireIndicator
<APIWrap apiInstance="{&quot;defaultValue&quot;:{&quot;value&quot;:&quot;*&quot;},&quot;name&quot;:&quot;requireIndicator&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;ReactNode&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.formItem.requireIndicator&quot;,&quot;description&quot;:&quot;Form item required indicator&quot;,&quot;resetType&quot;:&quot;boolean | ReactNode&quot;}}" ></APIWrap>
### label
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;label&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;ReactNode&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.formItem.label&quot;,&quot;description&quot;:&quot;Form item label&quot;}}" ></APIWrap>
### getContent
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;getContent&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;((options: GetContentOptions) => ReactNode)&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.formItem.getContent&quot;,&quot;resetType&quot;:&quot;(options: Options) => ReactNode&quot;,&quot;infoPath&quot;:&quot;docs_api_apiDocs_defineProps&quot;,&quot;infoTitle&quot;:&quot;callback Options&quot;,&quot;description&quot;:&quot;When using the FormItem component to create a controlled form item, you need to pass in this method, which returns the content that needs to be rendered. The parameters of getContent include the API of the form item, the model data of the form item, the verification status, and the attrs that match the native attributes.&quot;}}" ></APIWrap>
### initialValue
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;initialValue&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;any&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Initial value, used for the first rendering during FormItem initialization&quot;,&quot;localKey&quot;:&quot;API.form.global.props.form.share.initialValue&quot;,&quot;version&quot;:&quot;1.3.7&quot;}}" ></APIWrap>
### errorStyle
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;errorStyle&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;CSSInterpolation&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.form.share.errorStyle&quot;,&quot;description&quot;:&quot;Error message style, supports object nesting writing method&quot;}}" ></APIWrap>
### errorClassName
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;errorClassName&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;string&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Error prompt class name.&quot;,&quot;localKey&quot;:&quot;API.form.global.props.form.share.errorClass&quot;,&quot;version&quot;:&quot;1.3.4&quot;}}" ></APIWrap>
### labelPosition
<APIWrap apiInstance="{&quot;defaultValue&quot;:{&quot;value&quot;:&quot;row&quot;},&quot;name&quot;:&quot;labelPosition&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;\&quot;row\&quot; | \&quot;top\&quot;&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.form.share.labelPosition&quot;,&quot;description&quot;:&quot;label position&quot;}}" ></APIWrap>
### labelStyle
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;labelStyle&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;CSSInterpolation&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.form.share.labelStyle&quot;,&quot;description&quot;:&quot;Label style, supports object nesting writing method&quot;}}" ></APIWrap>
### labelWidth
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;labelWidth&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;string | number&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.form.share.labelWidth&quot;,&quot;description&quot;:&quot;Label width&quot;}}" ></APIWrap>
### labelClassName
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;labelClassName&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;string&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Label class name&quot;,&quot;localKey&quot;:&quot;API.form.global.props.form.share.labelClass&quot;,&quot;version&quot;:&quot;1.3.4&quot;}}" ></APIWrap>
### formItemStyle
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;formItemStyle&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;CSSInterpolation&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.form.share.formItemStyle&quot;,&quot;description&quot;:&quot;Form item style, supports object nesting writing method&quot;}}" ></APIWrap>
### formItemClassName
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;formItemClassName&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;string&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Form item class&quot;,&quot;localKey&quot;:&quot;API.form.global.props.form.share.formItemClass&quot;,&quot;version&quot;:&quot;1.3.4&quot;}}" ></APIWrap>
### trigger
<APIWrap apiInstance="{&quot;defaultValue&quot;:{&quot;value&quot;:&quot;change&quot;},&quot;name&quot;:&quot;trigger&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;\&quot;change\&quot; | \&quot;blur\&quot; | \&quot;manual\&quot; | (\&quot;change\&quot; | \&quot;blur\&quot; | \&quot;manual\&quot;)[]&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.form.share.trigger&quot;,&quot;description&quot;:&quot;Trigger verification event&quot;}}" ></APIWrap>
### contentStyle
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;contentStyle&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;CSSInterpolation&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.form.share.contentStyle&quot;,&quot;description&quot;:&quot;Form item content style, supports object nesting writing method&quot;}}" ></APIWrap>
### contentClassName
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;contentClassName&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;string&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Content area style class name&quot;,&quot;localKey&quot;:&quot;API.form.global.props.form.share.contentClass&quot;,&quot;version&quot;:&quot;1.3.4&quot;}}" ></APIWrap>
### fullWidth
<APIWrap apiInstance="{&quot;defaultValue&quot;:{&quot;value&quot;:&quot;false&quot;},&quot;name&quot;:&quot;fullWidth&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;boolean&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.form.share.fullWidth&quot;,&quot;description&quot;:&quot;Whether the width of the form item fills the entire row&quot;}}" ></APIWrap>
### contextProps
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;contextProps&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;ContextProps<Record<string, any>>&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.form.share.contextProps&quot;,&quot;resetType&quot;:&quot;ContextProps&quot;,&quot;infoTitle&quot;:&quot;prop&quot;,&quot;infoPath&quot;:&quot;docs_api_apiDocs_contextProps&quot;,&quot;description&quot;:&quot;Form item option life cycle. Where dependencies are collected for the entire form&quot;}}" ></APIWrap>
### readOnly
<APIWrap apiInstance="{&quot;defaultValue&quot;:{&quot;value&quot;:&quot;false&quot;},&quot;name&quot;:&quot;readOnly&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;boolean&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.form.share.readOnly&quot;,&quot;description&quot;:&quot;Whether the form item is read-only will pass this property to the form item's rendering control&quot;}}" ></APIWrap>
### readOnlyText
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;readOnlyText&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;ReactNode | (() => ReactNode)&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.form.share.readOnlyText&quot;,&quot;description&quot;:&quot;Customize content displayed in read-only state&quot;}}" ></APIWrap>
### formatChangeValue
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;formatChangeValue&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;((event: any) => any)&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.form.share.formatChangeValue&quot;,&quot;resetType&quot;:&quot;(e: any) => any&quot;,&quot;description&quot;:&quot;The value of the formatted control&quot;}}" ></APIWrap>
### noStyle
<APIWrap apiInstance="{&quot;defaultValue&quot;:{&quot;value&quot;:&quot;false&quot;},&quot;name&quot;:&quot;noStyle&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;boolean&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.form.share.noStyle&quot;,&quot;version&quot;:&quot;1.5.1&quot;}}" ></APIWrap>
