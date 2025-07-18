import SubscribeMediator from './mediator/SubscribeMediator';
import WatchMediator from './mediator/WatchMediator';

export class ObserverFactory<T> {
  public watchManager: WatchMediator<T> = {} as WatchMediator<T>;
  public subscribeManager: SubscribeMediator<T> = {} as SubscribeMediator<T>;

  private isInstanceMounted(instance: WatchMediator<T> | SubscribeMediator<T>) {
    return instance.getMountedState && instance.getMountedState();
  }
  create(type: 'watch' | 'subscribe') {
    switch (type) {
      case 'watch':
        if (!this.isInstanceMounted(this.watchManager)) {
          this.watchManager = new WatchMediator<T>();
        }
      case 'subscribe':
        if (!this.isInstanceMounted(this.subscribeManager)) {
          this.subscribeManager = new SubscribeMediator<T>();
        }
    }
  }
}

export default ObserverFactory;
