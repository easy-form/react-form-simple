---
nav: 
  title: API
  order: 1
title: methods
order: 2

toc: content
  

group:
  title: Form
  order: 1
  
---

# Form Methods 
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
