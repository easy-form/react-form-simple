import renderer from 'react-form-simple/renderer/render';
import type {
  UseFormNamespace,
  UseRenderNamespace,
} from 'react-form-simple/types/use';
import useControllerRef from './useControllerRef';

export const useRender = (config: UseRenderNamespace.UseRenderOptions) => {
  const { globalDatas } = config;

  const { bindIdApis } = globalDatas;

  const render: UseFormNamespace.UseFormReturnType['render'] =
    (bindId, singleConfig) => (parameter) =>
      renderer(bindId, parameter, { ...config, ...singleConfig });

  const exportMethods = useControllerRef({
    set(key: string, value: any) {
      bindIdApis.get(key)?.setValue(value);
    },
  });

  return { render, ...exportMethods };
};
