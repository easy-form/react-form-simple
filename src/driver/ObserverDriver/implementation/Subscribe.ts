import { cloneDeep } from 'lodash';
import type { UseSubscribeNamespace } from 'react-form-simple';
import { isEqual } from 'react-form-simple/utils/util';
import AbstractImp from '../abstract/AbstractImp';
import type { KeyType, RequiredContextType } from '../type';

type SubscribeFunctionType<T> = UseSubscribeNamespace.SubscribeFunType<T, any>;

export class Subscribe<T> extends AbstractImp {
  private subscribeFunction: SubscribeFunctionType<T> = () => ({});
  private callback: (value: any) => void = () => {};
  private previousResult = null;
  constructor(
    public key: KeyType,
    public contextProps: RequiredContextType<T>,
  ) {
    super();
  }
  private getCallbackResult() {
    const { model } = this.contextProps;
    return this.subscribeFunction({ model });
  }
  update(
    subscribeFunction: SubscribeFunctionType<T>,
    callback: (value: any) => void,
  ) {
    this.subscribeFunction = subscribeFunction;
    this.callback = callback;
  }
  emit() {
    const value = cloneDeep(this.getCallbackResult());
    if (isEqual(value, this.previousResult)) return;
    this.previousResult = value;
    this.callback(value);
  }
  destroy() {
    this.callback = () => {};
    this.subscribeFunction = () => {};
    this.previousResult = null;
  }
}

export default Subscribe;
