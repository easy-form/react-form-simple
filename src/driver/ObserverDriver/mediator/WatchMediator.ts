import type { UseWatchNamespace } from 'react-form-simple';
import AbstractObserver from '../abstract/AbstractObserver';
import { Watch } from '../implementation/Watch';
import type {
  CallbackType,
  KeyType,
  RequiredContextType,
  SubscribeFunType,
} from '../type';

export class WatchMediator<T> extends AbstractObserver<Watch<T>> {
  public register(
    key: KeyType,
    contextProps: RequiredContextType<T>,
    subscribeFun: SubscribeFunType<T>,
    cb: CallbackType,
    options?: UseWatchNamespace.WatchOptions,
  ) {
    const index = this.findKeyIndex(key);
    if (index >= 0) {
      this.get(index).update(subscribeFun, cb);
    } else {
      const watch = new Watch<T>(key, contextProps, options);
      watch.update(subscribeFun, cb);
      this.queue.push(watch);
    }
  }
  public getMountedState() {
    return this.mounted;
  }
}

export default WatchMediator;
