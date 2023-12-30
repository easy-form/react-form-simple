import type { CSSInterpolation } from '@emotion/css';
import React from 'react';
export type ReactNode = React.ReactNode;

/**
 * @localKey API.event.onChange.tag.type.desc
 * @description If you want to determine the optional value received by a specific control type after the value of the control rendered by the form item changes, the default value is the target.type of the onChange standard event object.
 *
 */

export type TagType = 'checkbox';

/**
 * Form validation event interface
 * blur is triggered when focus is lost
 * change is triggered when a form item changes
 * Manual is a manual trigger, which is particularly useful in certain specific demand scenarios.
 * @param 'change' | 'blur' | 'manual'
 */
export interface Triggers {
  triggerkey: 'change' | 'blur' | 'manual';
  trigger: Triggers['triggerkey'] | Triggers['triggerkey'][];
}

/**
 * The interfaces that the program needs to implement are defined in this namespace
 */
export namespace Apis {
  /**
   * Possible values for removeValidator parameter
   */
  export type ValidateBindIds =
    | (string | number | boolean)[]
    | string
    | number
    | undefined
    | null;
  /**
   * Program form public interface integration
   */
  export interface ShareApis {
    /**
     * @localKey API.form.share.validate.desc
     * @description Form validation.
     */
    validate: () => Promise<unknown>;
    /**
     * @description Reset the form.
     * @localKey API.form.share.reset.desc
     */
    reset: () => void;
  }
  /**
   * Form container interface integration to achieve unified management of a group of forms
   */
  export interface FormApis extends ShareApis {
    /**
     * @description Clear verification information
     * @localKey API.form.clearValidate.desc
     * @resetType (bindId?: string | string[]) => void
     */
    clearValidate: (bindId?: ValidateBindIds) => void;
    /**
     * @description Remove the validation rules. When the form is validated later, the validation will not be performed.
     * @resetType (bindId?: string | string[]) => void
     * @localKey API.form.removeValidator.desc
     */
    removeValidator: (bindId?: ValidateBindIds) => void;
    /**
     * @description Reapply for form item verification
     * @localKey API.form.reapplyValidator.desc
     * @resetType (bindId?: string | string[]) => void
     */
    reapplyValidator: (bindId?: ValidateBindIds) => void;
    /**
     * @description Set form item value
     * @localKey API.form.setValue.desc
     * @param bindId
     */
    setValue: (bindId: any, value: any) => void;
    // /**
    //  * @description Set values uniformly for form items
    //  * @localKey API.form.setValues.desc
    //  * @param bindId
    //  */
    // setValues: (values: Record<string, any>) => void;
    /**
     * @description Manually calling to set the error message will not trigger the onError event
     * @localKey API.formItem.setError.desc
     * @version 1.3.0
     * @resetType (bindId: string | string[], message?: React.ReactNode) => void
     */
    setError: (bindId: any | any[], message?: React.ReactNode) => void;
  }
  /**
   * The form unit item interface is integrated, so functional operations are based on these interfaces.
   */
  export interface FormItemApis extends ShareApis {
    /**
     * @description Clear form item verification information for external calls
     * @localKey API.formItem.clearValidate.desc
     */
    clearValidate: () => void;
    /**
     * @localKey API.formItem.removeValidator.desc
     * @description Remove the validation rules. When the form is validated later, the validation will not be performed.
     */
    removeValidator: () => void;
    /**
     * @localKey API.formItem.setValue.desc
     * @description Set the value of the form item for external calls
     */
    setValue: (value?: any) => void;
    /**
     * @localKey API.formItem.reapplyValidator.desc
     * @description Make external calls to re-apply for verification of form items
     */
    reapplyValidator: () => void;
    /**
     * @description Manually calling to set the error message will not trigger the onError event
     * @localKey API.formItem.setError.desc
     * @version 1.3.0
     */
    setError: (message?: React.ReactNode) => void;
  }
}

/**
 * Form validator implementation interface
 * Define the interface implementation type and pass in the verification rule type
 */
export namespace GlobalRules {
  /**
   * If it is not empty, you need to verify the incoming rules.
   */
  export type RequiredTypes = { required?: boolean | string };
  /**
   * Define a set of validation rule objects and pass in the type
   */
  export type RulesSingle = RequiredTypes & {
    validator?: (value: any) => string | null | boolean | number;
  };
  /**
   * Verification rules do not need to be passed
   * You can pass in an array or a separate object Or don’t pass it on
   */
  export type Rules = RulesSingle | RulesSingle[] | [] | null | undefined;
}

/**
 * All props received by the form program
 * It contains form group props and unit form item props
 * The props shown in the document are all integrated here
 */
export namespace GlobalProps {
  /**
   * bindId may be passed in the value
   */
  export type BindId = any;

  export type BindIds = (string | number | boolean)[];

  export type GetContentOptionsAttrs = {
    /**
     * @localKey API.form.global.props.GetContentOptionsAttrs.onChange.desc
     * @description onChange event passed to UI control
     */
    onChange: (e: any, tagType?: TagType) => void;
    /**
     * @localKey API.form.global.props.GetContentOptionsAttrs.onBlur.desc
     * @description The onBlur event passed to the UI control. This method does not receive any parameters.
     */
    onBlur: () => void;
    /**
     * @localKey API.form.global.props.GetContentOptionsAttrs.value.desc
     * @description The value passed to the UI control.
     */
    value: any;
    /**
     * @localKey API.form.global.props.GetContentOptionsAttrs.readOnly.desc
     * @description ReadOnly passed to the UI control.
     */
    readOnly: boolean | undefined;
    /**
     * @localKey API.form.global.props.GetContentOptionsAttrs.checked.desc
     * @description Passed to the checked attribute of the UI control, the checked selection is based on the existence of the value. If the value of the value is meaningful, that is, if the value has a value, it will be true.
     */
    checked: boolean;
  };

  export type GetContentOptions = {
    /**
     * @ResetType Object
     * @description Form model data for the current form item
     * @localKey API.form.global.props.GetContentOptions.model.desc
     */
    model: Record<string, any>;
    /**
     * @localKey API.form.global.props.GetContentOptions.bindId.desc
     * @description The form field for the current form item.
     */
    bindId: string;
    /**
     * @localKey API.form.global.props.GetContentOptions.isError.desc
     * @description The verification status of the current form item. It is true if the verification fails.
     */
    isError: boolean;
    /**
     * @infoTitle attrs parameters
     * @resetType Object
     * @infoPath docs_apiDemos_getContentAttrs
     * @description The basic properties of the control will be passed to your UI control
     * @localKey API.form.global.props.GetContentOptions.attrs.desc
     */
    attrs: GetContentOptionsAttrs;
  } & Apis.FormItemApis;
  /**
   * apiEffect methods args
   */
  export type ApiEffectOptions = Pick<FormItemProps, 'bindId'> & {
    /**
     * @localKey API.form.global.props.ApiEffectOptions.uid.desc
     * @description The current form item uid.
     */
    uid: string;
    // /**
    //  * @description Manually refresh the value inside the form item
    //  * @localKey API.form.global.props.ApiEffectOptions.refreshValue.desc
    //  */
    // refreshValue: () => void;
  } & Omit<Apis.FormApis, 'setValues'>;

  /**
   * To make a form controlled, you need to pass in a context
   * This will be exposed to the user so that he can customize the form control, and will also be integrated into useForm in the library.
   * It contains some form life cycle hooks
   */
  export type ContextProps = {
    /**
     * @localKey API.form.global.props.ContextProps.mounted.desc
     * @description The form item is mounted and executed for the first time. In a form item, this hook will only be executed once.It will call back an object, which will contain the unique authentication uid of this form item.
     * @param options form uid
     */
    mounted?: (options: { uid: string; bindId: BindId }) => void;
    /**
     * @localKey API.form.global.props.ContextProps.apiEffect.desc
     * @description A hook executed when one of the form item APIs changes. Please see the Apis.FormItemApis interface for the existing APIs.
     * @resetType (options: Options) => void
     * @infoPath docs_apiDemos_apiEffect
     * @infoTitle parameter
     *
     */
    apiEffect?: (options: ApiEffectOptions) => void;

    /**
     * @description Hook executed when form item input content changes
     * @localKey API.form.global.props.ContextProps.updated.desc
     */
    updated?: (options: { uid: string; bindId: BindId; value: any }) => void;
    /**
     * @localKey API.form.global.props.ContextProps.reset.desc
     * @description Executed after the current form item content is reset
     */
    reset?: (options: { uid: string; bindId: BindId; value: any }) => void;
    /**
     * @localKey API.form.global.props.ContextProps.destroy.desc
     * @description Hook executed when form item is destroyed
     */
    destroy?: (options: { uid: string; bindId: BindId }) => void;
  };

  /**
   * Public props of a form group
   */
  export type FormShareProps = {
    /**
     * @localKey API.form.global.props.form.share.errorStyle
     * @description Error message style, supports object nesting writing method
     * @resetType CSSProperties
     */
    errorStyle?: CSSInterpolation;
    /**
     * @description Error prompt class name.
     * @localKey API.form.global.props.form.share.errorClass
     * @version 1.3.4
     */
    errorClassName?: string;
    /**
     * @localKey API.form.global.props.form.share.labelPosition
     * @description label position
     * @default row
     */
    labelPosition?: 'row' | 'top';
    /**
     * @localKey API.form.global.props.form.share.labelStyle
     * @description Label style, supports object nesting writing method
     * @resetType CSSProperties
     */
    labelStyle?: CSSInterpolation;
    /**
     * @localKey API.form.global.props.form.share.labelWidth
     * @description Label width
     */
    labelWidth?: string | number;
    /**
     * @description Label class name
     * @localKey API.form.global.props.form.share.labelClass
     * @version 1.3.4
     */
    labelClassName?: string;
    /**
     * @localKey API.form.global.props.form.share.formItemStyle
     * @description Form item style, supports object nesting writing method
     */
    formItemStyle?: CSSInterpolation;
    /**
     * @description Form item class
     * @localKey API.form.global.props.form.share.formItemClass
     * @version 1.3.4
     */
    formItemClassName?: string;
    /**
     * @localKey API.form.global.props.form.share.trigger
     * @description Trigger verification event
     * @default change
     */
    trigger?: Triggers['trigger'];
    /**
     * @localKey API.form.global.props.form.share.contentStyle
     * @description Form item content style, supports object nesting writing method
     */
    contentStyle?: CSSInterpolation;
    /**
     * @description Content area style class name
     * @localKey API.form.global.props.form.share.contentClass
     * @version 1.3.4
     */
    contentClassName?: string;
    /**
     * @localKey API.form.global.props.form.share.fullWidth
     * @description Whether the width of the form item fills the entire row
     * @default false
     */
    fullWidth?: boolean;
    /**
     * @localKey API.form.global.props.form.share.contextProps
     * @resetType Object
     * @infoTitle hook
     * @infoPath docs_apiDemos_contextProps
     * @description Form item option life cycle. Where dependencies are collected for the entire form
     */
    contextProps?: ContextProps;
    /**
     * @localKey API.form.global.props.form.share.readOnly
     * @description Whether the form item is read-only will pass this property to the form item's rendering control
     * @default false
     */
    readOnly?: boolean;
    /**
     * @localKey API.form.global.props.form.share.readOnlyText
     * @description Customize content displayed in read-only state
     */
    readOnlyText?: ReactNode;
    /**
     * @localKey API.form.global.props.form.share.formatChangeValue
     * @resetType Function
     * @description The value of the formatted control
     */
    formatChangeValue?: (event: Event) => any;
  };

  /**
   * Props received by the form group
   */
  export type FormProps = FormShareProps & {
    /**
     * @localKey API.form.global.props.form.formStyle
     * @description Form style, supports object nesting writing method
     */
    formStyle?: CSSInterpolation;
    /**
     * @description Form container class name.
     * @localKey API.form.global.props.form.formClass
     * @version 1.3.4
     */
    formClassName?: string;
    /**
     * @ignore true
     */
    children?: ReactNode;
    /**
     * @localKey API.form.global.props.form.direction
     * @description Overall form layout direction
     * @default column
     */
    direction?: 'row' | 'column';
  };

  /**
   * Props received by the form item
   */
  export type FormItemProps = {
    /**
     * @localKey API.form.global.props.formItem.rules
     * @description Form item verification rules, if it is an empty array or has no value, the form item will not be verified.
     */
    rules?: GlobalRules.Rules;
    /**
     * @localKey API.form.global.props.formItem.bindId
     * @description The field name bound to the form item is used to identify the uniqueness of the form item
     */
    bindId?: BindId;
    /**
     * @localKey API.form.global.props.formItem.onError
     * @description Callback function when form item verification fails
     */
    onError?: (msg: string, name?: string) => void;
    /**
     * @localKey API.form.global.props.formItem.customErrTips
     * @description Whether to customize error message prompts. If true, the form item will not display error messages by default. will be handled externally
     * @default false
     */
    customErrTips?: boolean;
    /**
     * @localKey API.form.global.props.formItem.defaultValue
     * @description The default value for the form item content to be displayed
     */
    defaultValue?: any;
    /**
     * @localKey API.form.global.props.formItem.requireIndicator
     * @description Form item required indicator
     * @default *
     */
    requireIndicator?: boolean;
    /**
     * @ignore true
     */
    children?: ReactNode;
    /**
     * @localKey API.form.global.props.formItem.label
     * @description Form item label
     */
    label?: ReactNode;
    /**
     * @localKey API.form.global.props.formItem.getContent
     * @resetType (options: Options) => ReactNode
     * @infoPath docs_apiDemos_getContent
     * @infoTitle getContent parameters
     * @description When using the FormItem component to create a controlled form item, you need to pass in this method, which returns the content that needs to be rendered. The parameters of getContent include the API of the form item, the model data of the form item, the verification status, and the attrs that match the native attributes.
     */
    getContent?: (options: GetContentOptions) => ReactNode;
    /**
     * @localKey API.form.global.props.form.share.readOnlyText
     * @description Customize content displayed in read-only state
     */
    readOnlyText?: ReactNode;
  } & FormShareProps;
}
