import type {
  DefaultRecord,
  GlobalProps,
  UseFormNamespace,
} from 'react-form-simple';
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

  const set = (path: string, value: string) => {
    uidWithFormItemAPIs.get(path)?.setValue(value);
  };

  const render: UseFormNamespace.UseFormReturnType['render'] =
    (bindId, singleConfig) => (parameter) =>
      renderer(bindId, parameter, { ...options, ...singleConfig });

  return {
    set,
    render,
  };
};
