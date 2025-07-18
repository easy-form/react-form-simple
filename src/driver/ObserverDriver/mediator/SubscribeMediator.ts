import AbstractObserver from '../abstract/AbstractObserver';
import { Subscribe } from '../implementation/Subscribe';
import type { KeyType, RequiredContextType, SubscripeFunType } from '../type';

export class SubscribeMediator<T> extends AbstractObserver<Subscribe<T>> {
  public register(
    key: KeyType,
    contextProps: RequiredContextType<T>,
    subscribeFun: SubscripeFunType<T>,
    callback: (value: any) => void,
  ): void {
    this.registerObserver(
      key,
      () => new Subscribe<T>(key, contextProps),
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

export default SubscribeMediator;
