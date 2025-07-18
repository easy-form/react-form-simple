import { cloneDeep } from 'lodash';
import type { UseSubscribeNamespace } from 'react-form-simple';
import { isEqual } from 'react-form-simple/utils/util';
import AbstractImp from '../abstract/AbstractImp';
import type { KeyType, RequiredContextType } from '../type';

type SubscribeFunctionType<T> = UseSubscribeNamespace.SubscribeFunType<T, any>;

export class Subscribe<T> extends AbstractImp {
  private subscribeFunction: SubscribeFunctionType<T> = () => ({});
  private callback: (value: any) => void = () => {};
  private previousResult: any = null;
  private isDestroyed = false;

  constructor(
    public key: KeyType,
    public contextProps: RequiredContextType<T>,
  ) {
    super();
  }

  private getCallbackResult() {
    if (this.isDestroyed) return null;
    const { model } = this.contextProps;
    return this.subscribeFunction({ model });
  }

  update(
    subscribeFunction: SubscribeFunctionType<T>,
    callback: (value: any) => void,
  ): void {
    if (this.isDestroyed) return;

    this.subscribeFunction = subscribeFunction;
    this.callback = callback;
  }

  emit(): void {
    if (this.isDestroyed) return;

    const currentResult = this.getCallbackResult();

    // Skip if result hasn't changed
    if (isEqual(currentResult, this.previousResult)) {
      return;
    }

    // Only clone when result has actually changed
    const clonedResult = cloneDeep(currentResult);
    this.previousResult = clonedResult;

    // Execute callback with cloned result
    this.callback(clonedResult);
  }

  destroy(): void {
    this.isDestroyed = true;

    // Clear references to prevent memory leaks
    this.callback = () => {};
    this.subscribeFunction = () => ({});
    this.previousResult = null;
  }
}

export default Subscribe;
