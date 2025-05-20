import { cloneDeep, debounce } from 'lodash';
import { useCallback, useRef } from 'react';
import type {
  DefaultRecord,
  UseFormNamespace,
  UseFormReturnType,
} from 'react-form-simple';
import { createObserverForm } from 'react-form-simple';
import { updateProxyValue } from 'react-form-simple/driver/ControllerDriver';
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

  const { contextProps, overlayApis, uidWithFormItemAPIs } = useContextApi();

  const debounceFn = useRef({
    watch: debounce(() => {
      observerFactory.watchManager.notify();
    }),
  }).current;

  const _createObserverForm = useCallback(
    () =>
      createObserverForm(
        proxyTarget.current as T,
        ({ path }) => {
          console.log(path);
          set();
          observerFactory.subscribeManager.notify();
          debounceFn.watch();
        },
        {
          path: [],
        },
      ),
    [],
  );

  const proxyModel = useRef(_createObserverForm()).current;

  const observerFactory = useRef(new ObserverFactory<T>()).current;
  observerFactory.create('watch');
  observerFactory.create('subscribe');

  const _contextProps = useRef<UseFormReturnType<T>['contextProps']>({
    ...contextProps,
    model: proxyModel,
    observerFactory,
    updated({ bindId, value }) {
      updateProxyValue(proxyModel, bindId, value);
    },
  }).current;

  const { set, render } = createRender({
    ...config,
    model: proxyModel,
    contextProps: _contextProps,
    uidWithFormItemAPIs,
    defaultValues,
  });

  return {
    model: proxyModel,
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
