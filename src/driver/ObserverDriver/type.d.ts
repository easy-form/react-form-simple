import type { UseFormReturnType, UseWatchNamespace } from 'react-form-simple';

type KeyType = string | symbol;
type SubscribeFunType<T> = UseWatchNamespace.SubscribeFunType<T>;
type CallbackType = UseWatchNamespace.CallbackType;
type RequiredContextType<T> = UseFormReturnType<T>['contextProps'];
