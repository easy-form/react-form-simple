---
nav: 
  title: API
  order: 1
title: Return
order: 2

toc: content
  

group:
  title: useForm
  order: 0
  
---

# useForm Return Values 
### render
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;render&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;(bindId: any, config?: RenderConfigType | undefined) => (parameter: RenderReturnFnArgTypes) => ReactNode&quot;},&quot;tags&quot;:{&quot;infoTitle&quot;:&quot;Render Config&quot;,&quot;infoPath&quot;:&quot;docs_api_apiDocs_renderConfig&quot;,&quot;description&quot;:&quot;The form item rendering function accepts two parameters, the first parameter is the form item field, and the second parameter is the form item configuration.&quot;,&quot;localKey&quot;:&quot;API.useForm.render.desc&quot;,&quot;resetType&quot;:&quot;(bindId: any, [config]) => (parameter: ReactNode | (args: RenderFnReturnFnCallbackArgTypes) => ReactNode) => ReactNode&quot;}}" ></APIWrap>
### useSubscribe
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;useSubscribe&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;UseSubscribe<null>&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Subscribe to hooks for form items or the entire form. Receives a function whose return parameter is the latest model data of the form. The return value is the data that needs to be subscribed.&quot;,&quot;resetType&quot;:&quot;UseSubscribe<T>(({ model }) => any)&quot;,&quot;localKey&quot;:&quot;API.useForm.useSubscribe.desc&quot;}}" ></APIWrap>
### useWatch
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;useWatch&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;UseWatch<null>&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;A hook for observing changes in form data. Receive two functions, the first function returns the model data that needs to be observed, and the second parameter is the callback executed when the observed model data changes. If you want to observe multiple data, the first function needs to return an array. Allows returning a string if only one is observed. The second function will return two callback parameters. The first parameter is the value after the change, and the second parameter is the value before the change. The returned parameter type will be based on the return value type of the first function. If If a function returns a string, the type of the callback parameter will also be value, otherwise it will be an array.&quot;,&quot;localKey&quot;:&quot;API.useForm.useWatch.desc&quot;,&quot;resetType&quot;:&quot;UseWatch<T>(({ model }) => string | string[], (value, preValue) => void)&quot;}}" ></APIWrap>
### model
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;model&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;null&quot;},&quot;tags&quot;:{&quot;resetType&quot;:&quot;Object&quot;,&quot;localKey&quot;:&quot;API.useForm.model.desc&quot;,&quot;description&quot;:&quot;Form model data. The value of the model is always the latest value after the form item is controlled. Model is usually used when submitting form data and internal values in controlled form items. But please don't use it to re-render the view outside the form item, it will not re-render the view outside the form. If you need to render the latest value externally, use useSubscribe to subscribe to the value.&quot;}}" ></APIWrap>
### setState
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;setState&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;() => void&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.useForm.setState.desc&quot;,&quot;description&quot;:&quot;Manually re render the view. If you need to re render the view externally, you can call setState to re render the current component tree. Abandoned after version 1.4.1, please use the forceUpdate method instead.&quot;,&quot;resetType&quot;:&quot;Function&quot;,&quot;deprecated&quot;:&quot;This API will be discontinued after 1.4.1, please use the forceUpdate function instead&quot;}}" ></APIWrap>
### forceUpdate
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;forceUpdate&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;(delay?: boolean | undefined) => void&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Manually re-render the view. If you need to re-render the view externally, you can call setState to re-render the current component tree.&quot;,&quot;localKey&quot;:&quot;API.useForm.forceUpdate.desc&quot;,&quot;version&quot;:&quot;1.4.1&quot;}}" ></APIWrap>
### setValues
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;setValues&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;(values: Record<string, any>) => void&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Set values uniformly for form items&quot;,&quot;localKey&quot;:&quot;API.form.setValues.desc&quot;,&quot;param&quot;:&quot;values&quot;}}" ></APIWrap>
### clearValidate
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;clearValidate&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;(bindId?: ValidateBindIds) => void&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Clear verification information&quot;,&quot;localKey&quot;:&quot;API.form.clearValidate.desc&quot;,&quot;resetType&quot;:&quot;(bindId?: string | string[]) => void&quot;}}" ></APIWrap>
### removeValidator
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;removeValidator&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;(bindId?: ValidateBindIds) => void&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Remove the validation rules. When the form is validated later, the validation will not be performed.&quot;,&quot;resetType&quot;:&quot;(bindId?: string | string[]) => void&quot;,&quot;localKey&quot;:&quot;API.form.removeValidator.desc&quot;}}" ></APIWrap>
### reapplyValidator
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;reapplyValidator&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;(bindId?: ValidateBindIds) => void&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Reapply for form item verification&quot;,&quot;localKey&quot;:&quot;API.form.reapplyValidator.desc&quot;,&quot;resetType&quot;:&quot;(bindId?: string | string[]) => void&quot;}}" ></APIWrap>
### setValue
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;setValue&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;(bindId: any, value: any) => void&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Set form item value&quot;,&quot;localKey&quot;:&quot;API.form.setValue.desc&quot;,&quot;param&quot;:&quot;bindId&quot;}}" ></APIWrap>
### setError
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;setError&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;(bindId: any, message?: ReactNode) => void&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Manually calling to set the error message will not trigger the onError event&quot;,&quot;localKey&quot;:&quot;API.formItem.setError.desc&quot;,&quot;version&quot;:&quot;1.3.0&quot;,&quot;resetType&quot;:&quot;(bindId: string | string[], message?: React.ReactNode) => void&quot;}}" ></APIWrap>
### validate
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;validate&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;() => Promise<unknown>&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.share.validate.desc&quot;,&quot;description&quot;:&quot;Form validation.&quot;}}" ></APIWrap>
### reset
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;reset&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;() => void&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Reset the form.&quot;,&quot;localKey&quot;:&quot;API.form.share.reset.desc&quot;}}" ></APIWrap>
### contextProps
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;contextProps&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;ContextProps&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.global.props.form.share.contextProps&quot;,&quot;resetType&quot;:&quot;ContextProps&quot;,&quot;infoTitle&quot;:&quot;prop&quot;,&quot;infoPath&quot;:&quot;docs_api_apiDocs_contextProps&quot;,&quot;description&quot;:&quot;Form item option life cycle. Where dependencies are collected for the entire form&quot;}}" ></APIWrap>
