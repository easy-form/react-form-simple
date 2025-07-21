import { isMeaningful } from './util';

// Minimal event publish-subscribe class
export class Subscribe {
  private readonly observers = new Map<
    string,
    Array<(...args: any[]) => void>
  >();

  // Publish event
  emit(eventName: string, ...args: any[]): void {
    const callbacks = this.observers.get(eventName);
    if (callbacks && callbacks.length > 0) {
      // Iterate directly without copying array
      callbacks.forEach((callback) => {
        try {
          callback(...args);
        } catch (error) {
          console.error(`Error in subscriber for event "${eventName}":`, error);
        }
      });
    }
  }

  // Subscribe to event
  on(eventName: string, callback: (...args: any[]) => void): void {
    if (!isMeaningful(eventName) || typeof callback !== 'function') {
      return;
    }

    const callbacks = this.observers.get(eventName);
    if (callbacks) {
      callbacks.push(callback);
    } else {
      this.observers.set(eventName, [callback]);
    }
  }

  // Unsubscribe from specific event
  off(eventName: string): void {
    if (isMeaningful(eventName)) {
      this.observers.delete(eventName);
    }
  }

  // Clear all subscriptions
  clear(): void {
    this.observers.clear();
  }
}
