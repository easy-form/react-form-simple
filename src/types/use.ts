import type { GlobalProps } from './form';

import type { FormItemProps } from 'react-form-simple';

export type ReactNode = React.ReactNode;

/**
 * useForm hook Interface
 * Contains the return value type
 * The returned modal is the form object passed in externally and has the type inference function
 */
export namespace UseFormNamespace {
  /**
   * useForm and its controller need public properties
   */
  export interface ShareConfig extends Partial<FormItemProps> {
    defineProps?: (
      options: GlobalProps.GetContentOptions,
    ) => Record<
      string,
      GlobalProps.GetContentOptions[keyof GlobalProps.GetContentOptions] | any
    >;
  }

  /**
   * useForm Return value type
   * This can be exposed to the user for use
   * This interface is useful when type inference is required for component passthrough
   */
  export type UseFormReturnType<T = null> = {
    /**
     * Gives the context attribute to FormItem,The type is the same as FormItem contexProps
     * This usually does not need to display the FormItem, because it is already passed by default in my useForm. This is needed when the user customizes the form logic
     */
    contextProps: GlobalProps.ContextProps;
    /**
     * Render form item contents method, this is used by the user
     * This method is usually used because it is usually used when using useForm
     * The first argument is the bindId binding, and the second argument is the property given to FormItem
     */
    render: (
      bindId: any,
      config?: ShareConfig & { key?: string | number | symbol | boolean },
    ) => (parameter: ReactNode) => ReactNode;
    /**
     * This method is used when the user needs to subscribe to the latest value of the form value
     * If the latest values are changed externally in real time, rendering performance will be affected in the case of a large amount of data, especially in the case of dynamic forms, which can become very clunky
     * So the rendering of the latest value is only given to the user where it is needed to subscribe
     * Although the latest values are not rendered, changes to the model are up to date
     */
    useSubscribe: UseSubscribeNamespace.UseSubscribeReturnType<
      T,
      null
    >['useSubscribe'];
    /**
     * The user listens for a change in the value of a form
     * The first parameter is the form value to listen for, either an array or a specific value\
     * The second is the pullback after the change
     */
    useWatch: UseWatchNamespace.UseWatch<T>;
    /**
     * Form model data
     */
    modal: T;
    /**
     * The user manually triggers the visual update
     */
    setState: () => React.Dispatch<React.SetStateAction<unknown>>;
  };
}

/**
 *  useSubscribe hook
 */
export namespace UseSubscribeNamespace {
  export interface UseSubscribe<T> {
    (cb: (options: { modal: T }) => any): any;
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
      subscripeFun: { (options: { modal: T }): SubscripeFunReturnType },
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
    modal: Record<string, any>;
    globalDatas: Record<string, any>;
  }
}
