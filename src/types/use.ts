import type { Apis, FormItemProps, GlobalProps } from 'react-form-simple';
import ObserverFactory from 'react-form-simple/driver/ObserverDriver/Factory';

type ReactNode = React.ReactNode;

export type DefaultRecord<T extends Record<string, any> = Record<string, any>> =
  T;

/**
 * useForm hook Interface
 * Contains the return value type
 * The returned model is the form object passed in externally and has the type inference function
 */
export namespace UseFormNamespace {
  /**
   * useForm and its controller need public properties
   */
  export interface ShareConfig
    extends Omit<
      Partial<FormItemProps>,
      | 'bindId'
      | 'children'
      | 'getContent'
      | 'rules'
      | 'onError'
      | 'defaultValue'
      | 'requireIndicator'
      | 'label'
      | 'contextProps'
    > {}

  export type RenderConfigType = GlobalProps.FormItemProps & {
    /**
     * @deprecated Deprecated, rendering function does not provide support for keys after version 1.4.1
     * @ignore true
     */
    key?: any;
    /**
     * @description It is called when the internal state of the form item changes and it is necessary to define corresponding props based on these states and pass them to the rendering control.
     * @localKey API.useForm.render.args.config.defineProps
     * @infoTitle Args Type
     * @infoPath docs_api_apiDocs_defineProps
     */
    defineProps?: (
      options: GlobalProps.GetContentOptions,
    ) => Record<
      string,
      GlobalProps.GetContentOptions[keyof GlobalProps.GetContentOptions] | any
    >;
  };

  export interface RenderFnReturnFnCallbackArgTypes
    extends GlobalProps.GetContentOptions {
    props: any;
  }

  export type RenderReturnFnArgTypes =
    | ReactNode
    | ((args: RenderFnReturnFnCallbackArgTypes) => ReactNode);

  export type ContextProps<T> = GlobalProps.ContextProps<T> & {
    model: T;
    observerFactory: ObserverFactory<T>;
  };
  /**
   * useForm Return value type
   * This can be exposed to the user for use
   * This interface is useful when type inference is required for component passthrough
   */
  export type UseFormReturnType<T = DefaultRecord> = {
    /**
     * Render form item contents method, this is used by the user
     * @infoTitle Render Config
     * @infoPath docs_api_apiDocs_renderConfig
     * @description The form item rendering function accepts two parameters, the first parameter is the form item field, and the second parameter is the form item configuration.
     * @localKey API.useForm.render.desc
     * @resetType (bindId: any, [config]) => (parameter: ReactNode | (args: RenderFnReturnFnCallbackArgTypes) => ReactNode) => ReactNode
     */
    render: (
      bindId: any,
      config?: RenderConfigType,
    ) => (parameter: RenderReturnFnArgTypes) => ReactNode;

    /**
     * This method is used when the user needs to subscribe to the latest value of the form value
     * @description Subscribe to hooks for form items or the entire form. Receives a function whose return parameter is the latest model data of the form. The return value is the data that needs to be subscribed.
     * @resetType UseSubscribe<T>(({ model }) => any)
     * @localKey API.useForm.useSubscribe.desc
     */
    useSubscribe: UseSubscribeNamespace.UseSubscribeReturnType<
      T,
      null
    >['useSubscribe'];
    /**
     * The user listens for a change in the value of a form
     * @description A hook for observing changes in form data. Receive two functions, the first function returns the model data that needs to be observed, and the second parameter is the callback executed when the observed model data changes. If you want to observe multiple data, the first function needs to return an array. Allows returning a string if only one is observed. The second function will return two callback parameters. The first parameter is the value after the change, and the second parameter is the value before the change. The returned parameter type will be based on the return value type of the first function. If If a function returns a string, the type of the callback parameter will also be value, otherwise it will be an array.
     * @localKey API.useForm.useWatch.desc
     * @resetType (({ model }) => string | string[], (value, preValue) => void)
     */
    useWatch: UseWatchNamespace.UseWatch<T>;
    /**
     * @version 1.5.2
     * @description form watch
     * @localKey API.useForm.watch.desc
     * @resetType (subscribeFun: SubscripeFunType<T>,cb: CallbackType,key: string | symbol) => { unWatch: () => void }
     */
    watch: UseWatchNamespace.Watch<T>;
    /**
     * @description form unWatch
     * @resetType (key: string | symbol): void;
     * @localKey API.useForm.unWatch.desc
     * @version 1.5.2
     */
    unWatch: UseWatchNamespace.UnWatch;
    /**
     * @resetType Object
     * @localKey API.useForm.model.desc
     * @description Form model data. The value of the model is always the latest value after the form item is controlled. Model is usually used when submitting form data and internal values in controlled form items. But please don't use it to re-render the view outside the form item, it will not re-render the view outside the form. If you need to render the latest value externally, use useSubscribe to subscribe to the value.
     */
    model: T;
    /**
     * @localKey API.useForm.setState.desc
     * @description Manually re render the view. If you need to re render the view externally, you can call setState to re render the current component tree. Abandoned after version 1.4.1, please use the forceUpdate method instead.
     * @resetType Function
     * @deprecated This API will be discontinued after 1.4.1, please use the forceUpdate function instead
     */
    setState: () => void;
    /**
     * @description Manually re-render the view. If you need to re-render the view externally, you can call setState to re-render the current component tree.
     * @localKey API.useForm.forceUpdate.desc
     * @version 1.4.1
     */
    forceUpdate: (delay?: boolean) => void;

    /**
     * @description Set values uniformly for form items
     * @localKey API.form.setValues.desc
     * @param values
     */
    setValues: (values: Record<string, any>) => void;
  } & Apis.FormApis & { contextProps: ContextProps<T> };
}

/**
 *  useSubscribe hook
 */
export namespace UseSubscribeNamespace {
  export interface SubscribeFunType<T, O> {
    (option: { model: T }): O;
  }
  export interface UseSubscribe<T> {
    <O = unknown>(cb: SubscribeFunType<T, O>): O;
  }
  export interface UseSubscribeReturnType<T, H> {
    useSubscribe: UseSubscribe<T>;
    subscribes: H;
  }
}

/**
 * useWatch hook
 */
export namespace UseWatchNamespace {
  type SubscripeFunReturnOriginalType =
    | string
    | number
    | boolean
    | Record<string, any>;
  export type SubscripeFunReturnType =
    | SubscripeFunReturnOriginalType
    | SubscripeFunReturnOriginalType[]
    | null
    | undefined;

  export interface SubscripeFunType<T> {
    (options: { model: T }): SubscripeFunReturnType;
  }
  export interface CallbackType {
    (newValue: SubscripeFunReturnType, preValue: SubscripeFunReturnType): void;
  }
  export interface UseWatch<T = DefaultRecord> {
    (subscripeFun: SubscripeFunType<T>, cb: CallbackType): void;
  }
  export interface WatchOptions {
    /**
     * After useForm is called, useWatch needs to know the value for the first time
     * @default false
     */
    initialEmit?: boolean;
  }
  export interface Watch<T = DefaultRecord> {
    (
      subscribeFun: SubscripeFunType<T>,
      cb: CallbackType,
      key: string | symbol,
    ): { unWatch: () => void };
  }

  export interface UnWatch {
    (key: string | symbol): void;
  }
}
export namespace UseRenderNamespace {
  export interface UseRenderOptions extends UseFormNamespace.ShareConfig {
    model: Record<string, any>;
    globalDatas: Record<string, any>;
    contextProps: GlobalProps.ContextProps;
    defaultValues: Record<string, any>;
  }
}
