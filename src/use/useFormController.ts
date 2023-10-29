import { useContextApi } from './useContextApi';

export const useFormController = () => {
  const { contextProps, overlayApis } = useContextApi();

  return {
    overlayApis,
    contextProps,
  };
};

export default useFormController;
