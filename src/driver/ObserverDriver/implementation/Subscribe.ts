import { cloneDeep } from 'lodash';
import type { UseSubscribeNamespace } from 'react-form-simple';
import { isEqual } from 'react-form-simple/utils/util';
import AbstractImp from '../abstract/AbstractImp';
import type { KeyType, RequiredContextType } from '../type';

type SubscribeFunType<T> = UseSubscribeNamespace.SubscribeFunType<T, any>;

export class Subscribe<T> extends AbstractImp {
  private subscribeFun: SubscribeFunType<T> = () => ({});
  private cb: (value: any) => void = () => {};
  private preRet = null;
  constructor(
    public key: KeyType,
    public contextProps: RequiredContextType<T>,
  ) {
    super();
  }
  private getCallbackRet() {
    const { model } = this.contextProps;
    return this.subscribeFun({ model });
  }
  update(subscribeFun: SubscribeFunType<T>, cb: (value: any) => void) {
    this.subscribeFun = subscribeFun;
    this.cb = cb;
  }
  emit() {
    const value = cloneDeep(this.getCallbackRet());
    if (isEqual(value, this.preRet)) return;
    this.preRet = value;
    this.cb(value);
  }
  destroy() {
    this.cb = () => {};
    this.subscribeFun = () => {};
    this.preRet = null;
  }
}

export default Subscribe;
