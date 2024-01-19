import { cloneDeep, debounce } from 'lodash';
import { useCallback, useRef } from 'react';
import { createObserverForm } from 'react-form-simple';
import type { GlobalProps } from 'react-form-simple/types/form';
import type { UseFormNamespace } from 'react-form-simple/types/use';
import { updateProxyValue } from 'react-form-simple/utils/controller';
import { useContextApi } from './useContextApi';
import { useFormExtraApis } from './useFormExtraApis';
import { useRender } from './useRender';
import { usePrivateSubscribe } from './useSubscribe';
import { usePrivateWatch } from './useWatch';

const useForm = <T extends Record<string, any>>(
  model: T,
  config?: UseFormNamespace.ShareConfig,
) => {
  const proxyTarget = useRef(model || {});

  const defaultValues = useRef<T>(cloneDeep(model) || {}).current;

  const { contextProps, overlayApis, globalDatas } = useContextApi();

  const { useWatch, watchInstance } = usePrivateWatch({ model });

  const debounceWatch = useCallback(
    debounce(() => {
      watchInstance.emit();
    }),
    [],
  );

  const createObserverMap = useRef({
    proxyMap: new WeakMap(),
    rawMap: new WeakMap(),
  }).current;

  const proxymodel = createObserverForm(
    proxyTarget.current as T,
    ({ path, value }) => {
      set(path, value);
      subscribes.emit();
      debounceWatch();
    },
    {
      path: [],
      ...createObserverMap,
    },
  );

  const { subscribes, useSubscribe } = usePrivateSubscribe<T>({
    model: proxymodel as T,
  });

  const _contextProps = useRef<GlobalProps.ContextProps>({
    ...contextProps,
    updated({ bindId, value }) {
      updateProxyValue(proxymodel, bindId, value);
    },
    // reset({ bindId, value }) {
    //   updateProxyValue(proxymodel, bindId, value);
    // },
  }).current;

  const { render, set } = useRender({
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
    useSubscribe,
    useWatch,
    ...overlayApis,
    ...useFormExtraApis({ model: proxymodel, overlayApis, defaultValues }),
    ...createObserverMap,
  };
};

export default useForm;
