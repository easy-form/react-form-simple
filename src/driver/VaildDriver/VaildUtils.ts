import { cloneDeep } from 'lodash';
import React from 'react';
import type { GlobalProps, GlobalRules, Triggers } from 'react-form-simple';
import {
  getProxyValue,
  updateProxyValue,
} from 'react-form-simple/driver/ControllerDriver';
import { isMeaningful } from 'react-form-simple/utils/util';
import { VaildMethods } from './VaildMethods';

type RecordObj = Record<string, any>;
type Trigger = Triggers['trigger'];

type VaildMessage = string | React.ReactNode | null | undefined | boolean;

export class StaticVaildUtils {
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
    if (Boolean(required) && !VaildMethods.required(value)) {
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
  public static reset(
    model: RecordObj,
    bindId: GlobalProps.BindId,
    defaultValue: any,
  ) {
    if (bindId) {
      updateProxyValue(model, bindId, defaultValue);
    }
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

interface VaildUtilsConfig {
  defaultValue?: Record<string, any>;
  onError: (msg: VaildMessage) => void;
}

export class VaildUtils {
  model: RecordObj = {};
  bindId: GlobalProps.BindId = '';
  rules: GlobalRules.Rules = [];
  constructor(public configOptions: VaildUtilsConfig) {}
  public updateModel(model: RecordObj) {
    this.model = model;
  }
  public updateBindId(bindId: GlobalProps.BindId) {
    this.bindId = bindId;
  }
  public updateRule(rule: GlobalRules.Rules) {
    if (!rule) return;
    this.rules = StaticVaildUtils.formatArray(rule);
  }
  private updateErrorMessage(msg: VaildMessage) {
    this.configOptions.onError(msg);
  }
  public clearValidate() {
    this.updateErrorMessage('');
  }
  public getRules() {
    return StaticVaildUtils.getRules(this.rules);
  }
  public vaild(rule: GlobalRules.RulesSingle) {
    const value = StaticVaildUtils.getValue(this.model, this.bindId);
    return StaticVaildUtils.validate(value, rule);
  }
  public reset() {
    StaticVaildUtils.reset(
      this.model,
      this.bindId,
      this.configOptions.defaultValue,
    );
  }
  public removeValidator() {
    this.rules = [];
  }
}
