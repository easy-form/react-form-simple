import type { KeyType } from '../type';

export abstract class AbstractObserver<
  T extends { key: KeyType; destroy: () => void; emit: () => void },
> {
  // Primary storage: Direct observer Map for O(1) access
  private readonly observerMap = new Map<KeyType, T>();
  protected mounted: boolean = false;
  abstract getMountedState(): boolean;

  constructor() {
    this.mounted = true;
  }

  public notify(): void {
    // O(1) iteration over Map values
    this.observerMap.forEach((observer) => void observer.emit?.());
  }

  abstract register(...args: any[]): void;

  // Template method - All O(1) operations
  protected registerObserver<K extends T>(
    key: KeyType,
    createObserver: () => K,
    updateObserver: (observer: K, ...args: any[]) => void,
    ...updateArgs: any[]
  ): void {
    // O(1) Map lookup
    const existingObserver = this.observerMap.get(key) as K | undefined;
    if (existingObserver) {
      updateObserver(existingObserver, ...updateArgs);
    } else {
      const newObserver = createObserver();
      updateObserver(newObserver, ...updateArgs);
      // O(1) insertion
      this.observerMap.set(key, newObserver);
    }
  }

  // Pure O(1) lookup
  protected findObserver(key: KeyType): T | undefined {
    return this.observerMap.get(key);
  }

  // O(1) Map operations
  public destroy(key: KeyType): boolean {
    const observer = this.observerMap.get(key); // O(1)
    if (!observer) {
      return false;
    }

    observer.destroy();
    this.observerMap.delete(key); // O(1)
    return true;
  }

  // All O(1) operations
  public destroyAll(): void {
    this.observerMap.forEach((instance) => instance.destroy()); // O(n) but unavoidable
    this.observerMap.clear(); // O(1)
    this.mounted = false;
  }

  // Utility methods using pure Map operations
  public hasObserver(key: KeyType): boolean {
    return this.observerMap.has(key); // O(1)
  }

  public getObserverCount(): number {
    return this.observerMap.size; // O(1)
  }

  public getAllObservers(): T[] {
    return Array.from(this.observerMap.values()); // O(n) but explicit
  }

  public getAllKeys(): KeyType[] {
    return Array.from(this.observerMap.keys()); // O(n) but explicit
  }
}

export default AbstractObserver;
