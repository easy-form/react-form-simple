import { cloneDeep, debounce } from 'lodash';
import { useRef } from 'react';
import { createObserverForm } from 'react-form-simple';
import type { GlobalProps } from 'react-form-simple/types/form';
import type { UseFormNamespace } from 'react-form-simple/types/use';
import {
  replaceTarget,
  updateProxyValue,
} from 'react-form-simple/utils/controller';
import { useContextApi } from './useContextApi';
import useForceUpdate from './useForceUpdate';
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
  const preValues = useRef<T>(model);

  const { contextProps, overlayApis, globalDatas } = useContextApi();

  const { useWatch, watchInstance } = usePrivateWatch({ model });

  // const forceUpdate = useForceUpdate();

  const debounceFn = useRef({
    watch: debounce(() => {
      watchInstance.emit();
    }),
    onChangeLength: debounce(() => {
      preValues.current = cloneDeep(proxymodel);
      replaceTarget(proxymodel, preValues.current);
      // forceUpdate();
    }),
  }).current;

  const _createObserverForm = useRef(() => {
    return createObserverForm(
      proxyTarget.current as T,
      ({ path, value }) => {
        set(path, value);
        subscribes.emit();
        debounceFn.watch();
      },
      {
        path: [],
        onChangeLength: debounceFn.onChangeLength,
      },
    );
  }).current;

  const proxymodel = useRef(_createObserverForm()).current;

  const { subscribes, useSubscribe } = usePrivateSubscribe<T>({
    model: proxymodel as T,
  });

  const _contextProps = useRef<GlobalProps.ContextProps>({
    ...contextProps,
    updated({ bindId, value }) {
      updateProxyValue(proxymodel, bindId, value);
    },
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
  };
};

export default useForm;
