import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { UseRenderNamespace, useForm } from 'react-form-simple';

export default function App() {
  const { render, validate, useSubscribe, clearValidate, model } = useForm({
    name: '',
    radio: 'change',
  });

  const renderSubmit = (
    <button
      onClick={async () => {
        await validate();
        alert(JSON.stringify(model));
      }}
    >
      Submit
    </button>
  );

  const subscribeTrigger = useSubscribe(({ model }) => model.radio);

  const renderName = render('name', {
    rules: { required: 'Please Input' },
    requireIndicator: true,
    label: 'name',
    trigger: subscribeTrigger as UseRenderNamespace.UseRenderOptions['trigger'],
  })(<input />);

  const renderTrigger = render(`radio`)(
    <RadioGroup row>
      {['change', 'blur', 'manual'].map((trigger) => (
        <FormControlLabel
          value={trigger}
          control={<Radio />}
          label={trigger}
          key={trigger}
          onChange={() => {
            clearValidate();
          }}
        />
      ))}
    </RadioGroup>,
  );

  return (
    <>
      <div>{renderTrigger}</div>
      {renderName}
      {renderSubmit}
    </>
  );
}
