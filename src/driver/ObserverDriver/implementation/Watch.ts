import { cloneDeep } from 'lodash';
import { UseWatchNamespace } from 'react-form-simple';
import { isEqual } from 'react-form-simple/utils/util';
import AbstractImp from '../abstract/AbstractImp';
import {
  CallbackType,
  KeyType,
  RequiredContextType,
  SubscripeFunType,
} from '../type';

export class Watch<T> extends AbstractImp {
  private callback: CallbackType = () => {};
  private previousResult: UseWatchNamespace.SubscripeFunReturnType = null;
  private subscribeFunction: SubscripeFunType<T> = () => ({});
  private isDestroyed = false;
  private initTimer: number | null = null;

  constructor(
    public key: KeyType,
    public contextProps: RequiredContextType<T>,
    public options?: UseWatchNamespace.WatchOptions,
  ) {
    super();
    this.initializeWithDelay();
  }

  private initializeWithDelay(): void {
    const { initialEmit } = this.options || {};

    // Use requestAnimationFrame for better performance than setTimeout
    this.initTimer = requestAnimationFrame(() => {
      if (this.isDestroyed) return;

      if (initialEmit) {
        this.emit({ equal: false });
      } else {
        // Only clone when necessary for initial comparison
        this.previousResult = cloneDeep(this.getCallbackResult());
      }
      this.initTimer = null;
    });
  }

  private getCallbackResult() {
    if (this.isDestroyed) return null;
    const { model } = this.contextProps;
    return this.subscribeFunction({ model });
  }

  public emit(option?: { equal?: boolean }): void {
    if (this.isDestroyed) return;

    const { equal = true } = option || {};
    const result = this.getCallbackResult();

    // Avoid unnecessary cloning by comparing first
    const hasChanged = !equal || !isEqual(result, this.previousResult);

    if (hasChanged) {
      // Only clone when we actually need to pass the value
      const clonedResult = cloneDeep(result);
      const clonedPrevious = this.previousResult;

      this.callback(clonedResult, clonedPrevious);
    }

    // Always update previous result, but only clone if changed
    this.previousResult = hasChanged ? cloneDeep(result) : this.previousResult;
  }

  public update(
    subscribeFunction: SubscripeFunType<T>,
    callback: CallbackType,
  ): void {
    if (this.isDestroyed) return;

    this.callback = callback;
    this.subscribeFunction = subscribeFunction;
  }

  public destroy(): void {
    this.isDestroyed = true;

    // Cancel pending initialization
    if (this.initTimer !== null) {
      cancelAnimationFrame(this.initTimer);
      this.initTimer = null;
    }

    // Clear references to prevent memory leaks
    this.callback = () => {};
    this.previousResult = null;
    this.subscribeFunction = () => ({});
  }
}

export default Watch;
