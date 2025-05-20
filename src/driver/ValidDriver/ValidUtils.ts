import { cloneDeep } from 'lodash';
import React from 'react';
import type { GlobalProps, GlobalRules, Triggers } from 'react-form-simple';
import { getProxyValue } from 'react-form-simple/driver/ControllerDriver';
import { isMeaningful } from 'react-form-simple/utils/util';
import { ValidMethods } from './ValidMethods';

type RecordObj = Record<string, any>;
type Trigger = Triggers['trigger'];

type ValidMessage = string | React.ReactNode | null | undefined | boolean;

export class StaticValidUtils {
  public static formatArray(args: any) {
    if (!args) return [];
    return Array.isArray(args) ? cloneDeep(args) : [args];
  }
  public static getValue(model: RecordObj, bindId: GlobalProps.BindId) {
    return isMeaningful(bindId) ? getProxyValue(model, bindId) : null;
  }
  public static validate(value: any, rule: GlobalRules.RulesSingle) {
    const { required, validator } = rule;
    let msg: number | string | null | undefined | boolean = null;
    if (Boolean(required) && !ValidMethods.required(value)) {
      msg =
        typeof required === 'string' && isMeaningful(required)
          ? required
          : 'Required';
    }
    if (validator) {
      msg = validator?.(value);
    }
    return msg;
  }

  public static getTriggers(trigger: Trigger) {
    if (!trigger) return [];
    const _trigger: Trigger = Array.isArray(trigger) ? trigger : [trigger];
    return _trigger.filter(Boolean);
  }
  public static getRules(rules: GlobalRules.Rules) {
    return [...this.formatArray(rules)].filter(Boolean);
  }
}

interface ValidUtilsConfig {
  defaultValue?: Record<string, any>;
  onError: (msg: ValidMessage) => void;
}

type Value = string | number | boolean | Record<string, any> | undefined | null;

export class ValidUtils {
  private value: Value = undefined;

  public readonly bindId: GlobalProps.BindId = '';

  public rules: GlobalRules.Rules = [];

  constructor(public configOptions: ValidUtilsConfig) {}
  public updateValue(value: Value) {
    this.value = value;
  }
  public updateRule(rule: GlobalRules.Rules) {
    if (!rule) return;
    this.rules = StaticValidUtils.formatArray(rule);
  }
  private updateErrorMessage(msg: ValidMessage) {
    this.configOptions.onError(msg);
  }
  public clearValidate() {
    this.updateErrorMessage('');
  }
  public getRules() {
    return StaticValidUtils.getRules(this.rules);
  }
  public validate(rule: GlobalRules.RulesSingle) {
    return StaticValidUtils.validate(this.value, rule);
  }
  public reset() {
    this.value = this.configOptions.defaultValue;
  }
  public removeValidator() {
    this.rules = [];
  }
}
