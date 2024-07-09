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
  private cb: CallbackType = () => {};
  private preRet: UseWatchNamespace.SubscripeFunReturnType = null;
  private subscribeFun: SubscripeFunType<T> = () => ({});
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
      this.preRet = cloneDeep(this.getCallbackRet());
    });
  }

  private getCallbackRet() {
    const { model } = this.contextProps;
    return this.subscribeFun({ model });
  }
  public emit(option?: { equal?: boolean }) {
    const { equal = true } = option || {};
    const ret = this.getCallbackRet();
    if (!equal || !isEqual(ret, this.preRet)) {
      this.cb(cloneDeep(ret), this.preRet);
    }
    this.preRet = cloneDeep(ret);
  }
  public update(subscribeFun: SubscripeFunType<T>, cb: CallbackType) {
    this.cb = cb;
    this.subscribeFun = subscribeFun;
  }
  public destroy() {
    this.cb = () => {};
    this.preRet = null;
    this.subscribeFun = () => ({});
  }
}

export default Watch;
