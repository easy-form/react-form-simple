import type { UseFormReturnType, UseWatchNamespace } from 'react-form-simple';

type KeyType = string | symbol;
type SubscripeFunType<T> = UseWatchNamespace.SubscripeFunType<T>;
type CallbackType = UseWatchNamespace.CallbackType;
type RequiredContextType<T> = UseFormReturnType<T>['contextProps'];
