import type { Apis, GlobalProps } from './form';

import type { FormItemProps } from 'react-form-simple';

type ReactNode = React.ReactNode;

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

  /**
   * useForm Return value type
   * This can be exposed to the user for use
   * This interface is useful when type inference is required for component passthrough
   */
  export type UseFormReturnType<T = null> = {
    /**
     * Render form item contents method, this is used by the user
     * @description The form item rendering function accepts two parameters, the first parameter is the form item field, and the second parameter is the form item configuration.
     * @localKey API.useForm.render.desc
     * @resetType (bindId: any, [config]) => (parameter: ReactNode) => ReactNode
     */
    render: (
      bindId: any,
      config?: GlobalProps.FormItemProps & {
        /**
         * @deprecated Deprecated, rendering function does not provide support for keys after version 1.4.1
         */
        key?: any;
        /**
         * @resetType Function
         * @description It is called when the internal state of the form item changes and it is necessary to define corresponding props based on these states and pass them to the rendering control.
         * @localKey API.useForm.render.args.config.defineProps
         */
        defineProps?: (
          options: GlobalProps.GetContentOptions,
        ) => Record<
          string,
          | GlobalProps.GetContentOptions[keyof GlobalProps.GetContentOptions]
          | any
        >;
      },
    ) => (parameter: ReactNode) => ReactNode;
    /**
     * This method is used when the user needs to subscribe to the latest value of the form value
     * @description Subscribe to hooks for form items or the entire form. Receives a function whose return parameter is the latest model data of the form. The return value is the data that needs to be subscribed.
     * @resetType useWatch(({ model }) => any)
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
     * @resetType useWatch(() => string | string[], (value, preValue) => void)
     */
    useWatch: UseWatchNamespace.UseWatch<T>;
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
    forceUpdate: () => void;
    /**
     * @description Set values uniformly for form items
     * @localKey API.form.setValues.desc
     * @param values
     */
    setValues: (values: Record<string, any>) => void;
  } & Apis.FormApis &
    Pick<GlobalProps.FormItemProps, 'contextProps'>;
}

/**
 *  useSubscribe hook
 */
export namespace UseSubscribeNamespace {
  export interface UseSubscribe<T> {
    <O = unknown>(cb: (options: { model: T }) => O): O;
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
  export interface UseWatch<T = Record<string, any>> {
    (
      subscripeFun: { (options: { model: T }): SubscripeFunReturnType },
      cb: {
        (
          newValue: SubscripeFunReturnType,
          preValue: SubscripeFunReturnType,
        ): void;
      },
    ): void;
  }
  export interface WatchChangeCbProps {
    /**
     * After useForm is called, useWatch needs to know the value for the first time
     */
    isInitEmit?: boolean;
  }
  export interface WatchChangeCb {
    (options?: WatchChangeCbProps): void;
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
