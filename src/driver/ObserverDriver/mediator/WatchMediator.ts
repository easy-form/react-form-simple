import type { UseWatchNamespace } from 'react-form-simple';
import AbstractObserver from '../abstract/AbstractObserver';
import { Watch } from '../implementation/Watch';
import type {
  CallbackType,
  KeyType,
  RequiredContextType,
  SubscripeFunType,
} from '../type';

export class WatchMediator<T> extends AbstractObserver<Watch<T>> {
  public register(
    key: KeyType,
    contextProps: RequiredContextType<T>,
    subscribeFun: SubscripeFunType<T>,
    callback: CallbackType,
    options?: UseWatchNamespace.WatchOptions,
  ): void {
    this.registerObserver(
      key,
      () => new Watch<T>(key, contextProps, options),
      (observer, subscribeFun, callback) =>
        observer.update(subscribeFun, callback),
      subscribeFun,
      callback,
    );
  }

  public getMountedState(): boolean {
    return this.mounted;
  }
}

export default WatchMediator;
