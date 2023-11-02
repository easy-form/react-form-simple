import { isMeaningful } from './util';

export const Subscribe = class {
  readonly obesevers = new Map();
  emit(eventName: string, ...args: any) {
    const observerCallbacks = this.obesevers.get(eventName);
    if (observerCallbacks) {
      observerCallbacks?.filter(Boolean).forEach((fn: any) => {
        fn?.(...args);
      });
    }
  }
  on(eventName: string, fn: (...args: any[]) => void) {
    const observerCallbacks = this.obesevers.get(eventName);
    if (!observerCallbacks) {
      this.obesevers.set(eventName, [fn]);
    } else {
      observerCallbacks.push(fn);
    }
  }
  off(eventName: string) {
    if (isMeaningful(eventName)) {
      this.obesevers.delete(eventName);
    }
  }
  clear() {
    this.obesevers.clear();
  }
};

export default Subscribe;
