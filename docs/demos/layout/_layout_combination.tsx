import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import {
  Form,
  useForm,
  type FormProps,
  type UseRenderNamespace,
} from 'react-form-simple';

export default function App() {
  const { render, useSubscribe } = useForm(
    {
      userName: '',
      password: '',
      direction: 'column',
      labelPosition: 'row',
    },
    {
      labelStyle: { fontSize: '18px' },
      labelWidth: 120,
      formItemStyle: { margin: '10px' },
    },
  );

  const renderDir = render('direction', {
    label: 'direction:',
    fullWidth: true,
  })(
    <RadioGroup row>
      {['row', 'column'].map((v) => (
        <FormControlLabel value={v} control={<Radio />} label={v} />
      ))}
    </RadioGroup>,
  );

  const renderLabelPosition = render('labelPosition', {
    label: 'labelPosition:',
    fullWidth: true,
  })(
    <RadioGroup row>
      {['row', 'top'].map((v) => (
        <FormControlLabel value={v} control={<Radio />} label={v} />
      ))}
    </RadioGroup>,
  );

  const direction = useSubscribe(
    ({ model }) => model.direction,
  ) as FormProps['direction'];

  const labelPosition = useSubscribe(
    ({ model }) => model.labelPosition,
  ) as UseRenderNamespace.UseRenderOptions['labelPosition'];

  const renderUserName = render('userName', {
    label: 'userName',
    labelPosition,
  })(<input />);
  const renderPassword = render('password', {
    label: 'password',
    labelPosition,
  })(<input />);

  return (
    <>
      {renderDir}
      {renderLabelPosition}
      <Form direction={direction}>
        {renderUserName}
        {renderPassword}
      </Form>
    </>
  );
}
