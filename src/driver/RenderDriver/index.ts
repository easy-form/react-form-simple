import type {
  DefaultRecord,
  GlobalProps,
  UseFormNamespace,
} from 'react-form-simple';
import { renderer } from './Renderer';

interface CreateOptions<T = DefaultRecord>
  extends UseFormNamespace.ShareConfig {
  model: T;
  globalDatas: Record<string, any>;
  contextProps: GlobalProps.ContextProps<T>;
  defaultValues: T;
}

export const create = (options: CreateOptions) => {
  const { globalDatas } = options;
  const { bindIdMapUid, apis } = globalDatas;

  const set = (key: string, value: any) => {
    const uid = bindIdMapUid.get(key);
    apis.get(uid)?.setValue(value);
  };

  const render: UseFormNamespace.UseFormReturnType['render'] =
    (bindId, singleConfig) => (parameter) =>
      renderer(bindId, parameter, { ...options, ...singleConfig });

  return {
    set,
    render,
  };
};
