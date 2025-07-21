import { cloneDeep } from 'lodash';
import { GlobalProps, GlobalRules } from 'react-form-simple/types/form';
import { isMeaningful } from 'react-form-simple/utils/util';
import { getProxyValue, updateProxyValue } from '../ControllerDriver';
import { ValidationMethods } from './ValidMethods';

type RecordObj = Record<string, any>;
type Trigger = GlobalProps.FormShareProps['trigger'];
type ValidationMessage = string | number | null | undefined | boolean;

interface ValidationUtilsConfig {
  defaultValue: any;
  onError: (msg: ValidationMessage) => void;
}

export class StaticValidationUtils {
  static formatArray(args: any) {
    if (!args) return [];
    return Array.isArray(args) ? cloneDeep(args) : [args];
  }

  static getValue(model: RecordObj, bindId: GlobalProps.BindId) {
    return isMeaningful(bindId) ? getProxyValue(model, bindId) : null;
  }

  static validate(value: any, rule: GlobalRules.RulesSingle) {
    const { required, validator } = rule;

    if (Boolean(required) && !ValidationMethods.required(value)) {
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
    const triggerArray: Trigger = Array.isArray(trigger) ? trigger : [trigger];
    return triggerArray.filter(Boolean);
  }

  static getRules(rules: GlobalRules.Rules) {
    return [...this.formatArray(rules)].filter(Boolean);
  }
}

export class ValidationUtils {
  private model: RecordObj = {};
  private bindId: GlobalProps.BindId = '';
  private rules: GlobalRules.Rules = [];

  constructor(private configOptions: ValidationUtilsConfig) {}

  updateModel(model: RecordObj) {
    this.model = model;
  }

  updateBindId(bindId: GlobalProps.BindId) {
    this.bindId = bindId;
  }

  updateRule(rule: GlobalRules.Rules) {
    if (!rule) return;
    this.rules = StaticValidationUtils.formatArray(rule);
  }

  clearValidate() {
    this.configOptions.onError('');
  }

  getRules() {
    return StaticValidationUtils.getRules(this.rules);
  }

  validate(rule: GlobalRules.RulesSingle) {
    const value = StaticValidationUtils.getValue(this.model, this.bindId);
    return StaticValidationUtils.validate(value, rule);
  }

  reset() {
    StaticValidationUtils.reset(
      this.model,
      this.bindId,
      this.configOptions.defaultValue,
    );
    this.clearValidate();
  }

  removeValidator() {
    this.rules = [];
  }
}
