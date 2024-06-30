---
nav: 
  title: API
  order: 1
title: methods
order: 2

toc: content
  

group:
  title: FormItem
  order: 2
  
---

# FormItem Methods 
### clearValidate
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;clearValidate&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;() => void&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Clear form item verification information for external calls&quot;,&quot;localKey&quot;:&quot;API.formItem.clearValidate.desc&quot;}}" ></APIWrap>
### removeValidator
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;removeValidator&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;() => void&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.formItem.removeValidator.desc&quot;,&quot;description&quot;:&quot;Remove the validation rules. When the form is validated later, the validation will not be performed.&quot;}}" ></APIWrap>
### setValue
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;setValue&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;(value?: any) => void&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.formItem.setValue.desc&quot;,&quot;description&quot;:&quot;Set the value of the form item for external calls&quot;}}" ></APIWrap>
### reapplyValidator
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;reapplyValidator&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;() => void&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.formItem.reapplyValidator.desc&quot;,&quot;description&quot;:&quot;Make external calls to re-apply for verification of form items&quot;}}" ></APIWrap>
### setError
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;setError&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;(message?: ReactNode) => void&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Manually calling to set the error message will not trigger the onError event&quot;,&quot;localKey&quot;:&quot;API.formItem.setError.desc&quot;,&quot;version&quot;:&quot;1.3.0&quot;}}" ></APIWrap>
### validate
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;validate&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;() => Promise<unknown>&quot;},&quot;tags&quot;:{&quot;localKey&quot;:&quot;API.form.share.validate.desc&quot;,&quot;description&quot;:&quot;Form validation.&quot;}}" ></APIWrap>
### reset
<APIWrap apiInstance="{&quot;defaultValue&quot;:null,&quot;name&quot;:&quot;reset&quot;,&quot;type&quot;:{&quot;name&quot;:&quot;() => void&quot;},&quot;tags&quot;:{&quot;description&quot;:&quot;Reset the form.&quot;,&quot;localKey&quot;:&quot;API.form.share.reset.desc&quot;}}" ></APIWrap>
