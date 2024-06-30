import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { Form, FormProps, useForm } from 'react-form-simple';

export default function App() {
  const { render, useSubscribe } = useForm(
    {
      userName: '',
      password: '',
      direction: 'column',
    },
    {
      labelStyle: { fontSize: '18px' },
      labelWidth: 80,
      formItemStyle: { margin: '10px' },
    },
  );

  const direction = useSubscribe(
    ({ model }) => model.direction,
  ) as FormProps['direction'];

  const renderLabelRadio = render('direction', {
    label: 'direction:',
    fullWidth: true,
  })(
    <RadioGroup row>
      {['row', 'column'].map((v) => (
        <FormControlLabel value={v} control={<Radio />} label={v} />
      ))}
    </RadioGroup>,
  );
  const renderUserName = render('userName', {
    label: 'userName',
  })(<input />);
  const renderPassword = render('password', {
    label: 'password',
  })(<input />);

  return (
    <>
      {renderLabelRadio}
      <Form direction={direction}>
        {renderUserName}
        {renderPassword}
      </Form>
    </>
  );
}
