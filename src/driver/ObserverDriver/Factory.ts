import SubscribeMediator from './mediator/SubscribeMediator';
import WatchMediator from './mediator/WatchMediator';

export class ObserverFactory<T> {
  public watchManager: WatchMediator<T> = {} as WatchMediator<T>;
  public subscribeManager: SubscribeMediator<T> = {} as SubscribeMediator<T>;

  private checkState(instance: WatchMediator<T> | SubscribeMediator<T>) {
    return instance.getMountedState && instance.getMountedState();
  }
  create(type: 'watch' | 'subscribe') {
    switch (type) {
      case 'watch':
        if (!this.checkState(this.watchManager)) {
          this.watchManager = new WatchMediator<T>();
        }
      case 'subscribe':
        if (!this.checkState(this.subscribeManager)) {
          this.subscribeManager = new SubscribeMediator<T>();
        }
    }
  }
}

export default ObserverFactory;
