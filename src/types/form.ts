import React from 'react';
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
    /**
     * @description 表单校验。返回一个Promise，如果全部校验通过，会执行<strong>.then()</strong>，否则会执行<strong>.catch()</strong>并将错误信息在<strong>.catch</strong>(err => {})里返回出来。
     */
    validate: () => Promise<unknown>;
    /**
     * @description 重置表单，只有当表单项传入了defaultValue时，该表单项才能被reset。使用useForm时，内部已经默认使用defaultValue。也可以在render函数的参数里传入defaultValue覆盖默认值。使用FormItem的时候需要手动传入。
     */
    reset: () => void;
  }
  /**
   * Form container interface integration to achieve unified management of a group of forms
   */
  export interface FormApis extends ShareApis {
    /**
     * Clear verification information
     * @description 清除校验信息，只是清除校验时产生的错误，校验器依然存在。接收对应的表单项字段，可以为单个字段，也可以是字段的集合，如果不传bindId，则会清除整个表单的校验信息。
     * @resetType (bindId?: string | string[]) => void
     * @param bindId The form item to be cleared can be passed or not passed to clear the entire form.
     */
    clearValidate: (bindId?: ValidateBindIds) => void;
    /**
     * Remove validator
     * Remove the validation rules. When the form is validated later, the validation will not be performed.
     * @description 移除校验器。调用此方法后，表单项后续的校验将不会触发。接收对应的表单项字段，可以为单个字段，也可以是字段的集合，如果不传bindId，则会移除整个表单的校验。
     * @resetType (bindId?: string | string[]) => void
     * @param bindId The form item to be removed can be not passed. If not passed, the entire form will be removed.
     */
    removeValidator: (bindId?: ValidateBindIds) => void;
    /**
     * Reapply for form item verification
     * @description 重新添加校验器。当调用removeValidator后，如果需要重新校验，可以调用这个方法。接收对应的表单项字段，可以为单个字段，也可以是字段的集合，如果不传bindId，则会重新申请整个表单的校验。
     * @resetType (bindId?: string | string[]) => void
     * @param Reapply for form item verification
     * @returns bindId Re-apply form items. If not passed, the entire form will be re-applied for verification.
     */
    reapplyValidator: (bindId?: ValidateBindIds) => void;
    /**
     * Set form item value
     * @description 设置表单项的内部的value，将会将所设置的value传给渲染控件，以达到受控，使用useForm时，这个API通常会用不到。
     * @param bindId
     * @returns
     */
    setValue: (bindId: any, value: any) => void;
    /**
     * Set values uniformly for form items
     * @description 设置表单项的内部的value，将会将所设置的value传给渲染控件，以达到受控。与setValue不同的是，这个API接收一个对象，这个对象是表单字段与value的集合，比如<strong>setValues</strong>({ field: value })。
     * @param bindId
     * @returns
     */
    setValues: (values: Record<string, any>) => void;
  }
  /**
   * The form unit item interface is integrated, so functional operations are based on these interfaces.
   */
  export interface FormItemApis extends ShareApis {
    /**
     * Clear form item verification information for external calls
     * @description 清除校验信息，只是清除校验时产生的错误，校验器依然存在。
     */
    clearValidate: () => void;
    /**
     * Remove form item validator for external calls
     * Remove the validation rules. When the form is validated later, the validation will not be performed.
     * @description 移除校验器。调用此方法后，表单项后续的校验将不会触发。
     */
    removeValidator: () => void;
    /**
     * Set the value of the form item for external calls
     * @description 设置表单项的内部的value，将会将所设置的value传给渲染控件，以达到受控，使用useForm时，这个API通常会用不到。
     */
    setValue: (value?: any) => void;
    /**
     * Make external calls to re-apply for verification of form items
     * @description 重新添加校验器。当调用removeValidator后，如果需要重新校验，可以调用这个方法。
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

  export type GetContentOptionsAttrs = {
    /**
     * @description 传给UI控件的onChange事件，方法接收两个参数，第一个参数为事件的标准对象，如果你UI控件不是基于事件标准对象，请传入formatChangeValue告诉表单项要取哪个值，或者可以在控件onChange之后，传给表单项之前做做一层中间代理，处理完逻辑后，手动调用attrs.onChange({ target: value })。第二个参数是UI控件类型，React-form-simple默认取事件对象里的value和type来做判断，如果你的UI控件是checkBox且不是基于标准事件对象且他的受控属性不是value且，那么需要传第二个参数为checkbox。
     */
    onChange: (e: any, tagType?: TagType) => void;
    /**
     * @description 传给UI控件的onBlur事件。这个方法不接收任何参数。
     */
    onBlur: () => void;
    /**
     * @description 传给UI控件的value属性。
     */
    value: any;
    /**
     * @description 传给UI控件的readOnly属性。
     */
    readOnly: boolean | undefined;
    /**
     * @description 传给UI控件的checked属性，checked的选中根据value值存在来，如果value的值是有意义的，即value有值的情况下，则为true。
     */
    checked: boolean;
  };

  export type GetContentOptions = {
    /**
     * @ResetType Object
     * @description 当前表单项的表单模型数据，只包含当前表单项的value，这个value是可控的，可以直接通过model[bindId]=xxx来触发当前表单项的重新渲染。如果需要使用更多的表单字段，请使用useForm暴露出的model或者useSubscribe订阅字段。
     */
    model: Record<string, any>;
    /**
     * @description 当前表单项的表单字段。
     */
    bindId: string;
    /**
     *@description 当前表单项的校验状态，有校验不通过的情况下为true。
     */
    isError: boolean;
    /**
     * @infoTitle attrs具体参数
     * @resetType Object
     * @infoPath docs_apiDemos_getContentAttrs
     * @description 控件基本属性，在表单项渲染中，会将如上属性传递给你的UI控件。如果你的UI控件不是基于这些属性，请使用FormItem针对你的UI做一层封装。
     */
    attrs: GetContentOptionsAttrs;
  } & Apis.FormItemApis;
  /**
   * apiEffect methods args
   */
  export type ApiEffectOptions = Pick<FormItemProps, 'bindId'> & {
    /**
     * @description 当前表单项uid。
     */
    uid: string;
  } & Omit<Apis.FormApis, 'setValues'>;

  /**
   * To make a form controlled, you need to pass in a context
   * This will be exposed to the user so that he can customize the form control, and will also be integrated into useForm in the library.
   * It contains some form life cycle hooks
   */
  export type ContextProps = {
    /**
     * The form item is mounted and executed for the first time. In a form item, this hook will only be executed once.
     * It will call back an object, which will contain the unique authentication uid of this form item.
     * @description 每个表单项挂载之后执行的生命周期。在渲染中只会执行一次。可以在这里对表单项执行依赖收集或者初始化操作。回调出一个options对象，里面包含该表单项的bindId和该表单项的uid。
     * @param options form uid
     */
    mounted?: (options: { uid: string; bindId: BindId }) => void;
    /**
     * @description 表单项api或者bindId发生变动后触发的方法，初始化会执行一次。一般不会发生变动，可以在这里对api进行收集。
     * @resetType (options: Options) => void
     * @infoPath docs_apiDemos_apiEffect
     * @infoTitle Options具体参数
     * A hook executed when one of the form item APIs changes. Please see the Apis.FormItemApis interface for the existing APIs.
     */
    apiEffect?: (options: ApiEffectOptions) => void;

    /**
     * Hook executed when form item input content changes
     * @description 表单项监听控件value发生改变时触发的方法，<strong>只有当手动去输入的时候，这个方法才会执行</strong>。可以在这里对自定义的外部表单model数据进行赋值。以达到受控的效果。
     * @param options As the identity value of this form item, there are uid and bindId.
     * @param The value returned by the form item content change event callback,If it is an original form tag, the entire event object will be called back.
     */
    updated?: (options: { uid: string; bindId: BindId; value: any }) => void;
    /**
     * Executed after the current form item content is reset
     * @description 调用表单reset方法时触发的方法。可以在这里给表单项赋值默认值。
     */
    reset?: (options: { uid: string; bindId: BindId; value: any }) => void;
    /**
     * Hook executed when form item is destroyed
     * @description 表单项销毁时触发的方法。
     * @param options will return the form uid
     */
    destory?: (options: { uid: string; bindId: BindId }) => void;
  };

  /**
   * Public props of a form group
   */
  export type FormShareProps = {
    /**
     * @description 错误提示信息样式，支持对象嵌套写法
     */
    errorStyle?: React.CSSProperties;
    /**
     * @description 标签位置
     * @default row
     */
    labelPosition?: 'row' | 'top';
    /**
     * @description 标签样式，支持对象嵌套写法
     */
    labelStyle?: React.CSSProperties;
    /**
     * @description 标签宽度
     */
    labelWidth?: string | number;
    /**
     * @description 表单项样式，支持对象嵌套写法
     */
    formItemStyle?: React.CSSProperties;
    /**
     * @description 触发校验事件
     * @default change
     */
    trigger?: Triggers['trigger'];
    /**
     * @description 表单项内容样式，支持对象嵌套写法
     */
    contentStyle?: React.CSSProperties;
    /**
     * @description 表单项宽度是否撑满整行
     * @default false
     */
    fullWidth?: boolean;
    /**
     * @resetType Object
     * @infoTitle contextProps具体参数
     * @infoPath docs_apiDemos_contextProps
     * @description 表单项选项式生命周期。对整个表单进行依赖收集的地方，可以在这里对表单项做一些更加精确的控制。使用 useForm 时，通常不会需要这个。使用 FormItem 或者 Form 时或者定制化表单时，需要用到这个。当 useForm 与 Form 或者 FormItem 结合使用的时候，需要将 useForm 暴露出的 contextProps 传递给组件来进行依赖收集，也可以在你的代码里做一层代理执行某些逻辑后，在执行 contextProps 里的生命周期达到自定义的控制。
     */
    contextProps?: ContextProps;
    /**
     * @description 表单项是否只读，会将这个属性传递给表单项的渲染控件，如果控件支持readOnly属性，则会自动将控件变为主读，如果不支持，需要自定义只读内容。
     * @default false
     */
    readOnly?: boolean;
    /**
     * @description 只读状态下显示的内容
     * @default -
     */
    readOnlyText?: ReactNode;
    /**
     * @resetType Function
     * @link 用法请见<a href="/intro/introduce#集成第三方-ui">集成第三方UI</a>
     * @description 格式化控件的value值, react-form-simple的内部表单项默认取的是标准事件对象里的value ,即<strong>e.target.value</strong>, 如果你的控件是这个上面做了一层封装返回的不是标准事件对象，需要传入这个方法，react-form-simple的表单项的value将会获取这个方法的返回值。
     * @descriptionEn The value value of the formatted control defaults to the value in the standard event object, i.e. e.target.value. If your control has a layer of encapsulation on top of this, you can pass in this method, and the form item of the react form simple will obtain the return value of your method.
     */
    formatChangeValue?: (event: Event) => any;
  };

  /**
   * Props received by the form group
   */
  export type FormProps = FormShareProps & {
    /**
     * @description 表单样式，支持对象嵌套写法
     */
    formStyle?: React.CSSProperties;
    /**
     * @description 表单内容
     * @ignore true
     */
    children?: ReactNode;
    /**
     * @description 表单布局方向
     * @default column
     */
    direction?: 'row' | 'column';
  };

  /**
   * Props received by the form item
   */
  export type FormItemProps = {
    /**
     * @description 表单项校验规则，如果为空数组或者不传，表单项将不会校验。
     */
    rules?: GlobalRules.Rules;
    /**
     * @description 表单项绑定的字段名，用来标识表单项的唯一性，如果存在useForm，需要与useForm里的字段名对应。要使表单项受控，这个必传。
     */
    bindId?: BindId;
    /**
     * @description 表单项校验不通过时的回调函数。
     */
    onError?: (msg: string, name?: string) => void;
    /**
     * @description 是否自定义错误信息提示，为true后表单项默认不会显示错误信息。将会交给外部处理。
     * @default false
     */
    customErrTips?: boolean;
    /**
     * @description 表单项内容显示的默认值，reset时存在该值当前表单项才能被重置。使用useForm的话，在内部默认使用了defaultValue。可以在调用render的时候传入defaultValue覆盖它。使用FormItem组件的时候，需要手动传入。
     */
    defaultValue?: any;
    /**
     * @description 必填表单项指示器。
     * @default *
     */
    requireIndicator?: boolean;
    /**
     * @description 表单内容。
     * @ignore true
     */
    children?: ReactNode;
    /**
     * @description 表单项标签。
     */
    label?: string;
    /**
     * @resetType (options: Options) => ReactNode
     * @infoPath docs_apiDemos_getContent
     * @infoTitle getContent 具体参数
     * @description 使用 FormItem 组件形式创建一个受控表单项时，需要传入这个方法，方法返回需要渲染的内容。getContent 的参数包含有该表单项的 API、该表单项的模型数据、校验状态以及符合原生属性的 attrs，开发者可以针对这些参数做相应的逻辑处理。在参数返回的表单项 API 中，开发者可以直接调用来触发该表单项的对应事件以达到更精确更细度的控制。
     */
    getContent?: (options: GetContentOptions) => ReactNode;
    /**
     * @description 只读状态显示的内容。
     */
    readOnlyText?: ReactNode;
  } & FormShareProps;
}
