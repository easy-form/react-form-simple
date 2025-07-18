import { cloneDeep, debounce } from 'lodash';
import { useMemo } from 'react';
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
  const state = useMemo(() => {
    const proxyTarget = cloneDeep(model) || {};
    const defaultValues = cloneDeep(model) || {};
    const observerFactory = new ObserverFactory<T>();
    observerFactory.create('watch');
    observerFactory.create('subscribe');

    const debouncedWatchNotify = debounce(() => {
      observerFactory.watchManager.notify();
    });

    const proxyModel = createObserverForm(
      proxyTarget as T,
      ({ path, value }) => {
        set(path, value);
        observerFactory.subscribeManager.notify();
        debouncedWatchNotify();
      },
      {
        path: [],
        // onArrayChange: debounceFn.onChangeLength,
      },
    );

    return {
      proxyTarget,
      defaultValues,
      observerFactory,
      proxyModel,
    };
  }, []);

  const { contextProps, overlayApis, globalDatas } = useContextApi();

  const formContextProps = useMemo<UseFormReturnType<T>['contextProps']>(
    () => ({
      ...contextProps,
      model: state.proxyModel,
      observerFactory: state.observerFactory,
      updated({ bindId, value }) {
        updateProxyValue(state.proxyModel, bindId, value);
      },
    }),
    [contextProps, state],
  );

  const { set, render } = useMemo(
    () =>
      createRender({
        ...config,
        model: state.proxyModel,
        contextProps: formContextProps,
        globalDatas,
        defaultValues: state.defaultValues,
      }),
    [config, state, formContextProps, globalDatas],
  );

  const extraApis = useFormExtraApi<T>({
    overlayApis,
    defaultValues: state.defaultValues,
    contextProps: formContextProps,
  });

  return {
    model: state.proxyModel,
    contextProps: formContextProps,
    render,
    ...overlayApis,
    ...extraApis,
  };
};

export default useForm;
