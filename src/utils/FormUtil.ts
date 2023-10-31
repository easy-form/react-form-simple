import { cloneDeep, isEmpty } from 'lodash';
import {
  GlobalProps,
  GlobalRules,
  Triggers,
} from 'react-form-simple/types/form';
import { isMeaningful } from 'react-form-simple/utils/util';
import { getProxyValue, updateProxyValue } from './controller';

type Trigger = Triggers['trigger'];
type Rules = GlobalRules.Rules;
type RulesSingle = GlobalRules.RulesSingle;

class Formvalidate {
  constructor() {}
  isMeaningful(val: any) {
    return isMeaningful(val);
  }
  required(val: any) {
    if (Array.isArray(val)) {
      return val.length !== 0;
    }
    return this.isMeaningful(val);
  }
}

type FormUtilTypes = {
  modal?: Record<string, any>;
  trigger?: Trigger;
} & {
  bindId?: GlobalProps.BindId;
  defaultValue?: Record<string, any>;
  onErr: (msg: string | null) => void;
};

class FormUtil {
  readonly formvalidate: Formvalidate = new Formvalidate();
  bindId: GlobalProps.BindId;
  trigger: Trigger = [];
  defaultValue: any = {};
  rules: Rules = [];
  constructor(public configOptions?: FormUtilTypes) {
    this.defaultValue = this.configOptions?.defaultValue;
    if (!isEmpty(this.configOptions)) {
      this.replace(this.configOptions as FormUtilTypes);
    }
  }
  public replace(options: Partial<FormUtilTypes>) {
    this.configOptions = {
      ...this.configOptions,
      ...options,
    } as FormUtilTypes;
    const { bindId, trigger } = this.configOptions;
    this.bindId = bindId;
    this.trigger = trigger as Trigger;
    return this;
  }

  public getModal() {
    const { modal } = this.configOptions || {};
    return modal;
  }

  public getValue(modal: any) {
    return this.formvalidate.isMeaningful(this.bindId)
      ? getProxyValue(modal, this.bindId as string | number)
      : null;
  }
  public reset() {
    const modal = this.getModal();
    if (this.bindId) {
      updateProxyValue(
        modal,
        this.bindId as string | number,
        this.defaultValue,
      );
    }
  }
  public validate(rule: RulesSingle) {
    const modal = this.getModal();
    const value = this.getValue(modal);
    const { required, validator } = rule;
    let msg: number | string | null | undefined | boolean = null;
    if (Boolean(required) && !this.formvalidate.required(value)) {
      msg =
        typeof required === 'string' && this.formvalidate.isMeaningful(required)
          ? required
          : 'Required';
    }
    if (validator) {
      msg = validator?.(value);
    }
    this.updateErr(msg as string);
    return msg;
  }
  public getTriggers(trigger: Trigger) {
    if (!trigger) return [];
    const _trigger: Trigger = Array.isArray(trigger) ? trigger : [trigger];
    return _trigger.filter(Boolean);
  }
  public updateErr(str: string | null) {
    this.configOptions?.onErr?.(str);
  }
  public clearValidate() {
    this.updateErr('');
  }
  public removeValidator() {
    this.setRules([]);
  }
  reapplyValidator(r: Rules) {
    this.rules = this.formatArray(r);
  }
  private formatArray(args: any) {
    if (!args) return [];
    return Array.isArray(args) ? cloneDeep(args) : [args];
  }
  public setRules(r: Rules) {
    if (!r) return;
    this.rules = this.formatArray(r);
  }
  public getRules() {
    return [...this.formatArray(this.rules)].filter(Boolean);
  }
}

export { FormUtil, Formvalidate };

export default FormUtil;
