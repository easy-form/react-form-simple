import AbstractObserver from '../abstract/AbstractObserver';
import { Subscribe } from '../implementation/Subscribe';
import type { KeyType, RequiredContextType, SubscripeFunType } from '../type';

export class SubscribeMediator<T> extends AbstractObserver<Subscribe<T>> {
  public register(
    key: KeyType,
    contextProps: RequiredContextType<T>,
    subscribeFun: SubscripeFunType<T>,
    cb: (value: any) => void,
  ) {
    const index = this.findKeyIndex(key);
    if (index >= 0) {
      this.get(index).update(subscribeFun, cb);
    } else {
      const watch = new Subscribe<T>(key, contextProps);
      watch.update(subscribeFun, cb);
      this.queue.push(watch);
    }
  }
  public getMountedState() {
    return this.mounted;
  }
}

export default SubscribeMediator;
