import { isMeaningful } from 'react-form-simple/utils/util';
import type { KeyType } from '../type';

export abstract class AbstractObserver<
  T extends { key: KeyType; destroy: () => void; emit: () => void },
> {
  protected readonly queue: T[] = [];
  protected mounted: boolean = false;
  abstract getMountedState(): boolean;
  constructor() {
    this.mounted = true;
  }
  public notify() {
    this.get().forEach((observer) => void observer.emit?.());
  }
  protected get(index: number): T;
  protected get(): T[];
  protected get(index?: number) {
    return isMeaningful(index) ? this.queue[index as number] : this.queue;
  }

  abstract register(...args: any[]): void;
  protected findKeyIndex(key: KeyType) {
    return this.get().findIndex((v) => v.key === key);
  }
  public destroy(key: KeyType) {
    const index = this.findKeyIndex(key);
    if (index >= 0) {
      const instance = this.get(index);
      instance.destroy();
      this.get().splice(index, 1);
    }
  }
}

export default AbstractObserver;
