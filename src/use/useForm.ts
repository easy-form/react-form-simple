import { cloneDeep, debounce } from 'lodash';
import { useRef } from 'react';
import type {
  DefaultRecord,
  UseFormNamespace,
  UseFormReturnType,
} from 'react-form-simple';
import { createObserverForm } from 'react-form-simple';
import {
  replaceTarget,
  updateProxyValue,
} from 'react-form-simple/driver/ControllerDriver';
import { ObserverFactory } from 'react-form-simple/driver/ObserverDriver/Factory';
import { create as createRender } from 'react-form-simple/driver/RenderDriver';
import { useContextApi } from './useContextApi';
import { useFormExtraApi } from './useFormExtraApi';

const useForm = <T extends DefaultRecord>(
  model: T,
  config?: UseFormNamespace.ShareConfig,
) => {
  const proxyTarget = useRef(cloneDeep(model) || {});

  const defaultValues = useRef(cloneDeep(model) || {}).current;

  const { contextProps, overlayApis, globalDatas } = useContextApi();

  const debounceFn = useRef({
    watch: debounce(() => {
      observerFactory.watchManager.notify();
    }),
    onChangeLength: debounce(() => {
      replaceTarget(proxymodel, proxymodel);
    }),
  }).current;

  const _createObserverForm = useRef(() => {
    return createObserverForm(
      proxyTarget.current as T,
      ({ path, value }) => {
        set(path, value);
        observerFactory.subscribeManager.notify();
        debounceFn.watch();
      },
      {
        path: [],
        onChangeLength: debounceFn.onChangeLength,
      },
    );
  }).current;

  const proxymodel = useRef(_createObserverForm()).current;

  const observerFactory = useRef(new ObserverFactory<T>()).current;
  observerFactory.create('watch');
  observerFactory.create('subscribe');

  const _contextProps = useRef<UseFormReturnType<T>['contextProps']>({
    ...contextProps,
    model: proxymodel,
    observerFactory,
    updated({ bindId, value }) {
      updateProxyValue(proxymodel, bindId, value);
    },
  }).current;

  const { set, render } = createRender({
    ...config,
    model: proxymodel,
    contextProps: _contextProps,
    globalDatas,
    defaultValues,
  });

  return {
    model: proxymodel,
    contextProps: _contextProps,
    render,
    ...overlayApis,
    ...useFormExtraApi<T>({
      overlayApis,
      defaultValues,
      contextProps: _contextProps,
    }),
  };
};

export default useForm;
