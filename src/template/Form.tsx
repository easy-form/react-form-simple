import React, { useImperativeHandle } from 'react';

import 'react-form-simple/style/form.css';

import type { Apis, GlobalProps } from 'react-form-simple/types/form';

import DataContainer from './DataProvide';

import { useFormController } from 'react-form-simple/use/useFormController';
import { getCssInClasses } from 'react-form-simple/utils/util';

const Form = React.forwardRef<Apis.FormApis, GlobalProps.FormProps>(
  ({ children, ...restProps }, ref) => {
    const {
      formStyle,
      direction = 'row',
      formClassName,
      ...remainingProps
    } = restProps;

    const { overlayApis, contextProps } = useFormController();

    useImperativeHandle(ref, () => ({
      ...overlayApis,
    }));

    const classes = getCssInClasses(
      [
        'react-form-simple-form',
        formClassName as string,
        `react-form-simple-form-${direction}`,
      ],
      formStyle,
    );

    return (
      <DataContainer
        {...remainingProps}
        contextProps={{ ...contextProps, ...remainingProps.contextProps }}
      >
        <div className={classes}>{children}</div>
      </DataContainer>
    );
  },
);

export default Form;
