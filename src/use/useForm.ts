import { debounce } from 'lodash';
import { useCallback, useRef } from 'react';
import { createObserverForm } from 'react-form-simple';
import { GlobalProps } from 'react-form-simple/types/form';
import { UseFormNamespace } from 'react-form-simple/types/use';
import { updateProxyValue } from 'react-form-simple/utils/controller';
import { useContextApi } from './useContextApi';
import { useRender } from './useRender';
import { usePrivateSubscribe } from './useSubscribe';
import { usePrivateWatch } from './useWatch';

const useForm = <T extends Record<string, any>>(
  modal?: T,
  config?: UseFormNamespace.ShareConfig,
) => {
  const proxyTarget = useRef(modal || {});

  const { contextProps, overlayApis, useFormExtraApis } = useContextApi();

  const { useWatch, watchInstance } = usePrivateWatch({ modal });

  const debounceWatch = useCallback(
    debounce(() => {
      watchInstance.emit();
    }),
    [],
  );

  const proxyModal = createObserverForm(
    proxyTarget.current as T,
    ({ path, value }) => {
      set(path, value);
      subscribes.emit();
      debounceWatch();
    },
    {
      path: [],
    },
  );

  const { subscribes, useSubscribe } = usePrivateSubscribe<T>({
    modal: proxyModal as T,
  });

  const _contextProps: GlobalProps.ContextProps = {
    ...contextProps,
    updated({ bindId, value }) {
      updateProxyValue(proxyModal, bindId, value);
    },
    reset({ bindId, value }) {
      updateProxyValue(proxyModal, bindId, value);
    },
  };

  const { render, set } = useRender({
    ...config,
    modal: proxyModal,
    contextProps: _contextProps,
  });

  return {
    modal: proxyModal,
    contextProps,
    render,
    useSubscribe,
    useWatch,
    setState: useFormExtraApis.setState,
    ...overlayApis,
  };
};

export default useForm;
