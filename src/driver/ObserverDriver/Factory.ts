import SubscribeMediator from './mediator/SubscribeMediator';
import WatchMediator from './mediator/WatchMediator';

export class ObserverFactory<T> {
  private _watchManager: WatchMediator<T> | null = null;
  private _subscribeManager: SubscribeMediator<T> | null = null;

  // Use getter to ensure lazy initialization
  public get watchManager(): WatchMediator<T> {
    if (!this._watchManager) {
      this._watchManager = new WatchMediator<T>();
    }
    return this._watchManager;
  }

  public get subscribeManager(): SubscribeMediator<T> {
    if (!this._subscribeManager) {
      this._subscribeManager = new SubscribeMediator<T>();
    }
    return this._subscribeManager;
  }

  // Create method with proper break statements
  create(type: 'watch' | 'subscribe'): void {
    switch (type) {
      case 'watch':
        // Trigger lazy initialization
        void this.watchManager;
        break;
      case 'subscribe':
        // Trigger lazy initialization
        void this.subscribeManager;
        break;
      default:
        throw new Error(`Unknown observer type: ${type}`);
    }
  }
}

export default ObserverFactory;
