import { cloneDeep, debounce } from 'lodash';
import { useMemo } from 'react';
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
  const state = useMemo(() => {
    const proxyTarget = cloneDeep(model) || {};
    const defaultValues = cloneDeep(model) || {};
    const observerFactory = new ObserverFactory<T>();
    observerFactory.create('watch');
    observerFactory.create('subscribe');

    const debounceFn = {
      watch: debounce(() => {
        // 防抖通知只针对 watchManager，不重复通知 subscribeManager
        observerFactory.watchManager.notify();
      }),
      onChangeLength: debounce(() => {
        replaceTarget(proxymodel, proxymodel);
      }),
    };

    const proxymodel = createObserverForm(
      proxyTarget as T,
      ({ path, value }) => {
        set(path, value);
        observerFactory.subscribeManager.notify();
        debounceFn.watch();
      },
      {
        path: [],
        onArrayChange: debounceFn.onChangeLength,
      },
    );

    return {
      proxyTarget,
      defaultValues,
      observerFactory,
      debounceFn,
      proxymodel,
    };
  }, []);

  const { contextProps, overlayApis, globalDatas } = useContextApi();

  const _contextProps = useMemo<UseFormReturnType<T>['contextProps']>(
    () => ({
      ...contextProps,
      model: state.proxymodel,
      observerFactory: state.observerFactory,
      updated({ bindId, value }) {
        updateProxyValue(state.proxymodel, bindId, value);
      },
    }),
    [contextProps, state],
  );

  const { set, render } = useMemo(
    () =>
      createRender({
        ...config,
        model: state.proxymodel,
        contextProps: _contextProps,
        globalDatas,
        defaultValues: state.defaultValues,
      }),
    [config, state, _contextProps, globalDatas],
  );

  const extraApis = useFormExtraApi<T>({
    overlayApis,
    defaultValues: state.defaultValues,
    contextProps: _contextProps,
  });

  return {
    model: state.proxymodel,
    contextProps: _contextProps,
    render,
    ...overlayApis,
    ...extraApis,
  };
};

export default useForm;
