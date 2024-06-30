import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { useForm, type UseRenderNamespace } from 'react-form-simple';

export default function App() {
  const { render, useSubscribe } = useForm(
    {
      userName: '',
      password: '',
      labelPosition: 'row',
    },
    {
      labelStyle: { fontSize: '18px' },
    },
  );

  const labelPosition = useSubscribe(
    ({ model }) => model.labelPosition,
  ) as UseRenderNamespace.UseRenderOptions['labelPosition'];

  const renderLabelRadio = render('labelPosition', {
    label: 'labePosition:',
    fullWidth: true,
  })(
    <RadioGroup row>
      {['row', 'top'].map((v) => (
        <FormControlLabel value={v} control={<Radio />} label={v} />
      ))}
    </RadioGroup>,
  );
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
      {renderLabelRadio}
      {renderUserName}
      {renderPassword}
    </>
  );
}
