import type { Apis, GlobalProps } from './form';

import type { FormItemProps } from 'react-form-simple';

export type ReactNode = React.ReactNode;

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
     * This method is usually used because it is usually used when using useForm
     * The first argument is the bindId binding, and the second argument is the property given to FormItem
     * @description 表单项渲染函数，接受两个参数，第一个参数为表单项字段，第二个参数为表单项配置。
     * @link 具体配置请见<a href="/intro/api#formitem">FormItem</a>
     * @resetType (bindId: any, [config]) => (parameter: ReactNode) => ReactNode
     */
    render: (
      bindId: any,
      config?: GlobalProps.FormItemProps & {
        key?: string | number | symbol | boolean;
        /**
         * @resetType Function
         * @description 在表单项内部状态发生改变需要根据这些状态定义相应的prop传给渲染控件的时候调用。
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
     * If the latest values are changed externally in real time, rendering performance will be affected in the case of a large amount of data, especially in the case of dynamic forms, which can become very clunky
     * So the rendering of the latest value is only given to the user where it is needed to subscribe
     * Although the latest values are not rendered, changes to the model are up to date、
     * @description 订阅表单项或者整个表单的hook。接收一个函数，这个函数的返回参数是表单最新的模型数据。返回值则是需要被订阅的数据。
     * @resetType useWatch(({ model }) => any)
     */
    useSubscribe: UseSubscribeNamespace.UseSubscribeReturnType<
      T,
      null
    >['useSubscribe'];
    /**
     * The user listens for a change in the value of a form
     * The first parameter is the form value to listen for, either an array or a specific value\
     * The second is the pullback after the change
     * @description 观测表单数据变化的hook。接收两个函数，第一个函数返回需要被观察的模型数据，第二个参数为被观测的模型数据发生改变时执行的回调。观察多个数据的话第一个函数需要返回一个数组。如果只观察一个，允许返回一个字符串。第二个函数会返回两个回调参数，第一个参数为改变后的value，第二个参数为改变前的value，返回的参数类型将会根据第一个函数的返回值类型来，如果第一个函数返回的是字符串的话，那回调参数的类型也将是value，否则就是数组。
     * @resetType useWatch(() => string | string[], (value, preValue) => void)
     */
    useWatch: UseWatchNamespace.UseWatch<T>;
    /**
     * Form model data
     * @resetType Object
     * @description 表单模型数据。model的值永远是表单项受控后最新的值。在提交表单数据和在受控表单项内部值的时候，通常会用到model。但是请不要用它来在表单项外部来用它重新渲染视图，它不会重新表单外部的视图渲染。如果需要在外部用最新的值来渲染，请使用useSubscribe来订阅值。
     */
    model: T;
    /**
     * The user manually triggers the visual update
     * @description 手动重新渲染视图。如果在外部需要重新渲染视图，可以调用setState让当前组件树重新渲染。
     * @resetType Function
     */
    setState: () => React.Dispatch<React.SetStateAction<unknown>>;
  } & Apis.FormApis &
    Pick<GlobalProps.FormItemProps, 'contextProps'>;
}

/**
 *  useSubscribe hook
 */
export namespace UseSubscribeNamespace {
  export interface UseSubscribe<T> {
    (cb: (options: { model: T }) => any): any;
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
  }
}
