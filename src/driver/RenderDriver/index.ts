import type {
  DefaultRecord,
  GlobalProps,
  UseFormNamespace,
} from 'react-form-simple';
import { getProxyValue } from '../ControllerDriver';
import { renderer } from './Renderer';

interface CreateOptions<T = DefaultRecord>
  extends UseFormNamespace.ShareConfig {
  model: T;
  uidWithFormItemAPIs: Map<GlobalProps.BindId, GlobalProps.ApiEffectOptions>;
  contextProps: GlobalProps.ContextProps<T>;
  defaultValues: T;
}

export const create = (options: CreateOptions) => {
  const {
    uidWithFormItemAPIs,
    contextProps: { model },
  } = options;

  const set = () => {
    uidWithFormItemAPIs.forEach((v) => {
      v.setValue(getProxyValue(model, v.bindId));
    });
  };

  const render: UseFormNamespace.UseFormReturnType['render'] =
    (bindId, singleConfig) => (parameter) =>
      renderer(bindId, parameter, { ...options, ...singleConfig });

  return {
    set,
    render,
  };
};
