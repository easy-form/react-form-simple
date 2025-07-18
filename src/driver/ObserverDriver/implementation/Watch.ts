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
  constructor(
    public key: KeyType,
    public contextProps: RequiredContextType<T>,
    public options?: UseWatchNamespace.WatchOptions,
  ) {
    super();
    const { initialEmit } = options || {};
    setTimeout(() => {
      if (initialEmit) {
        this.emit({ equal: false });
        return;
      }
      this.previousResult = cloneDeep(this.getCallbackResult());
    });
  }

  private getCallbackResult() {
    const { model } = this.contextProps;
    return this.subscribeFunction({ model });
  }

  public emit(option?: { equal?: boolean }) {
    const { equal = true } = option || {};
    const result = this.getCallbackResult();
    if (!equal || !isEqual(result, this.previousResult)) {
      this.callback(cloneDeep(result), this.previousResult);
    }
    this.previousResult = cloneDeep(result);
  }

  public update(
    subscribeFunction: SubscripeFunType<T>,
    callback: CallbackType,
  ) {
    this.callback = callback;
    this.subscribeFunction = subscribeFunction;
  }

  public destroy() {
    this.callback = () => {};
    this.previousResult = null;
    this.subscribeFunction = () => ({});
  }
}

export default Watch;
