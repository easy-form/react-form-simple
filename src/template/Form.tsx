import React, { useImperativeHandle, useMemo } from 'react';

import 'react-form-simple/style/form.css';

import type { Apis, GlobalProps } from 'react-form-simple/types/form';

import DataContainer from './DataProvide';

import { useFormController } from 'react-form-simple/use/useFormController';
import { Box } from './Box';

const Form = React.forwardRef<Apis.FormApis, GlobalProps.FormProps>(
  ({ children, ...restProps }, ref) => {
    const { formStyle, direction = 'row', ...rests } = restProps;

    const { overlayApis, contextProps } = useFormController();

    useImperativeHandle(ref, () => ({
      ...overlayApis,
    }));

    const formClasses = useMemo(
      () => ['control-form', `control-form_${direction}`],
      [direction],
    );

    return (
      <DataContainer
        {...rests}
        contextProps={{ ...contextProps, ...rests.contextProps }}
      >
        <Box className={formClasses.join(' ')} sx={{ ...formStyle }}>
          {children}
        </Box>
      </DataContainer>
    );
  },
);

export default Form;
