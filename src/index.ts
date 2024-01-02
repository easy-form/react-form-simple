import type { Apis, GlobalProps } from './types/form';

import type { UseFormNamespace } from './types/use';

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
export type ContextProps = GlobalProps.ContextProps;

/**
 * Export all Form apis for use by the user
 */
export type { Apis } from './types/form';

/**
 * Export the return type of useForm to the user, which is very useful in transparent transmission
 */
export type UseFormReturnType<T = unknown> =
  UseFormNamespace.UseFormReturnType<T>;

export { default as FormItem } from './template/FormItem';

export { default as Form } from './template/Form';

export { default as useForm } from './use/useForm';

/**
 * Methods for creating subscription forms that users may need to use when customizing forms
 */
export { observer as createObserverForm } from './utils/controller';

/**
 * The default export is useForm
 */
export default useForm;
