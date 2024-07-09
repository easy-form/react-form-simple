import type { Apis, GlobalProps } from './types/form';

import type {
  DefaultRecord,
  UseFormNamespace,
  UseSubscribeNamespace,
  UseWatchNamespace,
} from './types/use';

import useForm from './use/useForm';

export type FormProps = GlobalProps.FormProps;

/**
 * Export all Form apis for use by the user
 */
export type FormApis = Apis.FormApis;

/**
 * Export all FormItem properties for ease of use by the user
 */
export type FormItemProps = GlobalProps.FormItemProps;

/**
 * Export all Form apis for use by the user
 */
export type FormItemApis = Apis.FormItemApis;

/**
 * Export all contextProps to the user
 */
export type ContextProps<T = DefaultRecord> = GlobalProps.ContextProps<T>;

/**
 * Export all Form apis for use by the user
 */
export type { Apis } from './types/form';

/**
 * Export the return type of useForm to the user, which is very useful in transparent transmission
 */
export type UseFormReturnType<T = DefaultRecord> =
  UseFormNamespace.UseFormReturnType<T>;

export * from './types/form';
export * from './types/use';

export type RenderOptionsConfig = Parameters<UseFormReturnType['render']>[1];

export type UseFormWatch<T> = UseWatchNamespace.UseWatch<T>;

export type FormWatch<T> = UseWatchNamespace.Watch<T>;

export type UseFormSubscribe<T> = UseSubscribeNamespace.UseSubscribe<T>;

export { default as FormItem } from './template/FormItem';

export { default as Form } from './template/Form';

export { default as useForm } from './use/useForm';

/**
 * Methods for creating subscription forms that users may need to use when customizing forms
 */
export { observer as createObserverForm } from './driver/ControllerDriver';

export * from './use/useWatch';

export * from './use/useSubscribe';

/**
 * The default export is useForm
 */
export default useForm;
