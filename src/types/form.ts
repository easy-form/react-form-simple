import React from 'react';
import { BoxProps } from './box';
export type ReactNode = React.ReactNode;

/**
 * @description 表单控件改变如果要确定具体控件类型所接收的可选值
 * @descriptionEn Form control changes if you want to determine the optional values received by a specific control type
 * The second parameter of onChange with parameter getContent defaults to the value taken from the event object of the first parameter
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
 * Program interface design
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
    validate: () => Promise<unknown>;

    reset: () => void;
  }
  /**
   * Form container interface integration to achieve unified management of a group of forms
   */
  export interface FormApis extends ShareApis {
    /**
     * Clear verification information
     * @description Just clear the verification information, the verification rules still exist
     * @param bindId The form item to be cleared can be passed or not passed to clear the entire form.
     */
    clearValidate: (bindId?: ValidateBindIds) => void;
    /**
     * Remove validator
     * Remove the validation rules. When the form is validated later, the validation will not be performed.
     * @description Remove validator Remove the validation rules. When the form is validated later, the validation will not be performed.
     * @param bindId The form item to be removed can be not passed. If not passed, the entire form will be removed.
     */
    removeValidator: (bindId?: ValidateBindIds) => void;
    /**
     * Reapply for form item verification
     * @param Reapply for form item verification
     * @returns bindId Re-apply form items. If not passed, the entire form will be re-applied for verification.
     */
    reapplyValidator: (bindId?: ValidateBindIds) => void;
  }
  /**
   * The form unit item interface is integrated, so functional operations are based on these interfaces.
   */
  export interface FormItemApis extends ShareApis {
    /**
     * Clear form item verification information for external calls
     * @description Just clear the verification information, the verification rules still exist
     */
    clearValidate: () => void;
    /**
     * Remove form item validator for external calls
     * Remove the validation rules. When the form is validated later, the validation will not be performed.
     * @description Remove validator Remove the validation rules. When the form is validated later, the validation will not be performed.
     */
    removeValidator: () => void;
    /**
     * Set the value of the form item for external calls
     */
    setValue: (value?: any) => void;
    /**
     * Make external calls to re-apply for verification of form items
     */
    reapplyValidator: () => void;
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
  /**
   * To make a form controlled, you need to pass in a context
   * This will be exposed to the user so that he can customize the form control, and will also be integrated into useForm in the library.
   * It contains some form life cycle hooks
   */
  export type ContextProps = {
    /**
     * The form item is mounted and executed for the first time. In a form item, this hook will only be executed once.
     * It will call back an object, which will contain the unique authentication uid of this form item.
     * @param options form uid
     */
    mounted?: (options: { uid: string; bindId: BindId }) => void;
    /**
     * A hook executed when one of the form item APIs changes. Please see the Apis.FormItemApis interface for the existing APIs.
     */
    apiEffect?: (
      options: {
        uid: string;
        bindId: BindId;
        removeValidator: Apis.FormApis['removeValidator'];
        reapplyValidator: Apis.FormApis['reapplyValidator'];
        clearValidate: Apis.FormApis['clearValidate'];
      } & Apis.ShareApis,
    ) => void;

    /**
     * Hook executed when form item input content changes
     * @param options As the identity value of this form item, there are uid and bindId.
     * @param The value returned by the form item content change event callback,If it is an original form tag, the entire event object will be called back.
     */
    updated?: (options: { uid: string; bindId: BindId; value: any }) => void;

    /**
     * Executed after the current form item content is reset
     */
    reset?: (options: { uid: string; bindId: BindId; value: any }) => void;

    /**
     *Hook executed when form item is destroyed
     * @param options will return the form uid
     */
    destory?: (options: { uid: string; bindId: BindId }) => void;
  };

  /**
   * Public props of a form group
   */
  export type FormShareProps = {
    /**
     * @description 错误提示信息样式
     */
    errorSx?: React.CSSProperties;
    /**
     * @description 标签位置
     * @default row
     */
    labelPosition?: 'row' | 'top';
    /**
     * @description 标签样式
     */
    labelStyle?: React.CSSProperties;
    /**
     * @description 标签宽度
     */
    labelWidth?: string | number;
    /**
     * @description 表单项样式
     */
    formItemSx?: React.CSSProperties;
    /**
     * @description 触发校验事件
     * @default change
     */
    trigger?: Triggers['trigger'];
    /**
     * @description 内容样式
     */
    contentSx?: React.CSSProperties;
    /**
     * @description 宽度是否撑满整行
     * @default false
     */
    fullWidth?: boolean;
    /**
     * @description 是否关闭校验不通过时边框标红
     * @default false
     */
    closeErrorLine?: boolean;
    /**
     * @ignore true
     */
    contextProps?: ContextProps;
    /**
     * @description 表单是否只读
     * @default false
     */
    readOnly?: boolean;
    /**
     * @description 只读状态下内容样式
     */
    readOnlyTextSx?: BoxProps['sx'];
    /**
     * @description 只读状态下默认显示内容
     * @default -
     */
    readOnlyDefaultText?: ReactNode;
    /**
     * @description 格式化控件的value值, 默认取的是标准事件对象里的value ,即e.target.value,如果你的控件是这个上面做了一层封装，可以传入这个方法，那么react-form-simple的表单项将会获取你这个方法的返回值。
     * @descriptionEn The value value of the formatted control defaults to the value in the standard event object, i.e. e.target.value. If your control has a layer of encapsulation on top of this, you can pass in this method, and the form item of the react form simple will obtain the return value of your method.
     */
    formatChangeValue?: (event: Event) => any;
  };

  /**
   * Props received by the form group
   */
  export type FormProps = FormShareProps & {
    /**
     * @description 表单样式
     */
    formStyle?: React.CSSProperties;
    /**
     * @description 表单内容
     */
    children?: ReactNode;
    /**
     * @description 布局方向
     * @default column
     */
    direction?: 'row' | 'column';
  };

  /**
   * Props received by the form item
   */
  export type FormItemProps = {
    /**
     * @description 表单项校验规则
     */
    rules?: GlobalRules.Rules;
    /**
     * @description 表单项绑定Id
     */
    bindId?: BindId;
    /**
     * @description 表单项校验不通过回调函数
     */
    onError?: (msg: string, name?: string) => void;
    /**
     * @description 是否自定义错误信息提示，为true后组件默认不会显示错误信息
     * @default false
     */
    customErrTips?: boolean;
    /**
     * @description 初始值，设置该值reset时才能被重置
     */
    initialValue?: any;
    /**
     * @description 默认值
     */
    defaultValue?: any;
    /**
     * @description 必填项指示器
     * @default *
     */
    requireIndicator?: boolean;
    /**
     * @description 表单内容
     */
    children?: ReactNode;
    /**
     * @description 表单项标签
     */
    label?: string;
    /**
     * @description 表单项内容渲染回调函数
     * @resetType ({ modal, bindId }) => ReactNode
     */
    getContent?: (
      options: {
        modal: Record<string, any>;
        bindId: string;
        isError: boolean;
        attrs: {
          onChange: (e: any, tagType?: TagType) => void;
          onBlur: () => void;
          value: any;
          readOnly: boolean | undefined;
          checked: boolean;
        };
      } & Apis.FormItemApis,
    ) => ReactNode;
    /**
     * @description 自定义只读状态文案显示
     */
    readOnlyText?: ReactNode;
  } & FormShareProps;
}
