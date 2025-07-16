import { cloneDeep } from 'lodash';
import { GlobalProps, GlobalRules } from 'react-form-simple/types/form';
import { isMeaningful } from 'react-form-simple/utils/util';
import { getProxyValue, updateProxyValue } from '../ControllerDriver';
import { VaildMethods } from './VaildMethods';

type RecordObj = Record<string, any>;
type Trigger = GlobalProps.FormShareProps['trigger'];
type VaildMessage = string | number | null | undefined | boolean;

interface VaildUtilsConfig {
  defaultValue: any;
  onError: (msg: VaildMessage) => void;
}

// 简化的静态验证工具
export class StaticVaildUtils {
  static formatArray(args: any) {
    if (!args) return [];
    return Array.isArray(args) ? cloneDeep(args) : [args];
  }

  static getValue(model: RecordObj, bindId: GlobalProps.BindId) {
    return isMeaningful(bindId) ? getProxyValue(model, bindId) : null;
  }

  static validate(value: any, rule: GlobalRules.RulesSingle) {
    const { required, validator } = rule;

    if (Boolean(required) && !VaildMethods.required(value)) {
      return typeof required === 'string' && isMeaningful(required)
        ? required
        : 'Required';
    }

    if (validator) {
      return validator(value);
    }

    return null;
  }

  static reset(
    model: RecordObj,
    bindId: GlobalProps.BindId,
    defaultValue: any,
  ) {
    if (bindId) {
      updateProxyValue(model, bindId, defaultValue);
    }
  }

  static getTriggers(trigger: Trigger) {
    if (!trigger) return [];
    const _trigger: Trigger = Array.isArray(trigger) ? trigger : [trigger];
    return _trigger.filter(Boolean);
  }

  static getRules(rules: GlobalRules.Rules) {
    return [...this.formatArray(rules)].filter(Boolean);
  }
}

// 大幅简化的验证工具类
export class VaildUtils {
  private model: RecordObj = {};
  private bindId: GlobalProps.BindId = '';
  private rules: GlobalRules.Rules = [];

  constructor(private configOptions: VaildUtilsConfig) {}

  updateModel(model: RecordObj) {
    this.model = model;
  }

  updateBindId(bindId: GlobalProps.BindId) {
    this.bindId = bindId;
  }

  updateRule(rule: GlobalRules.Rules) {
    if (!rule) return;
    this.rules = StaticVaildUtils.formatArray(rule);
  }

  clearValidate() {
    this.configOptions.onError('');
  }

  getRules() {
    return StaticVaildUtils.getRules(this.rules);
  }

  vaild(rule: GlobalRules.RulesSingle) {
    const value = StaticVaildUtils.getValue(this.model, this.bindId);
    return StaticVaildUtils.validate(value, rule);
  }

  reset() {
    StaticVaildUtils.reset(
      this.model,
      this.bindId,
      this.configOptions.defaultValue,
    );
  }

  removeValidator() {
    this.rules = [];
  }
}
