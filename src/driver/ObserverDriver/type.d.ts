import type { UseFormReturnType, UseWatchNamespace } from 'react-form-simple';

// Core types
export type KeyType = string | symbol;
export type SubscripeFunType<T> = UseWatchNamespace.SubscripeFunType<T>;
export type CallbackType = UseWatchNamespace.CallbackType;
export type RequiredContextType<T> = UseFormReturnType<T>['contextProps'];

// Observer interfaces
export interface IObserver {
  key: KeyType;
  emit(...args: any[]): void;
  update(...args: any[]): void;
  destroy(): void;
}

export interface IObserverManager<T extends IObserver> {
  register(...args: any[]): void;
  destroy(key: KeyType): void;
  destroyAll(): void;
  notify(): void;
  getMountedState(): boolean;
  get(): T[];
  get(index: number): T;
}

// Performance optimization options
export interface ObserverOptions {
  debounceMs?: number;
  deep?: boolean;
  immediate?: boolean;
}

// Factory interface (simplified without generic)
export interface IObserverFactory {
  watchManager: IObserverManager<any>;
  subscribeManager: IObserverManager<any>;
  create(type: 'watch' | 'subscribe'): void;
  destroy(): void;
}
