import React, { CSSProperties, useImperativeHandle, useMemo } from 'react';

import 'react-form-simple/style/form.less';

import type { Apis, GlobalProps } from 'react-form-simple/types/form';

import DataContainer from './DataProvide';

import { useFormController } from 'react-form-simple/use/useFormController';
import { Box } from './Box';

const Form = React.forwardRef<Apis.FormApis, GlobalProps.FormProps>(
  ({ children, ...restProps }, ref) => {
    const { formStyle, direction = 'column', ...rests } = restProps;

    const { overlayApis, contextProps } = useFormController();

    useImperativeHandle(ref, () => ({
      ...overlayApis,
    }));

    const _formStyle: CSSProperties = useMemo(
      () => ({
        display: 'flex',
        flexWrap: 'wrap',
        ...formStyle,
        flexDirection: direction,
      }),
      [formStyle, direction],
    );

    return (
      <DataContainer
        {...rests}
        contextProps={{ ...contextProps, ...rests.contextProps }}
      >
        <Box className="control-form" sx={{ ..._formStyle }}>
          {children}
        </Box>
      </DataContainer>
    );
  },
);

export default Form;
