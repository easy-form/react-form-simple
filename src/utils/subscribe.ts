import { isMeaningful } from './util';

// 极简事件发布订阅类
export class Subscribe {
  private readonly observers = new Map<
    string,
    Array<(...args: any[]) => void>
  >();

  // 发布事件
  emit(eventName: string, ...args: any[]): void {
    const callbacks = this.observers.get(eventName);
    if (callbacks && callbacks.length > 0) {
      // 直接遍历，不复制数组
      callbacks.forEach((callback) => {
        try {
          callback(...args);
        } catch (error) {
          console.error(`Error in subscriber for event "${eventName}":`, error);
        }
      });
    }
  }

  // 订阅事件
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

  // 取消订阅指定事件
  off(eventName: string): void {
    if (isMeaningful(eventName)) {
      this.observers.delete(eventName);
    }
  }

  // 清空所有订阅
  clear(): void {
    this.observers.clear();
  }
}
