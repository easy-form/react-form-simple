import { Checkbox, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model, validate } = useForm(
    { name: '', select: 'ten', checkbox: true },
    {
      labelPosition: 'top',
      fullWidth: true,
      labelStyle: { fontSize: '16px' },
      labelWidth: 100,
    },
  );

  const renderName = render('name', {
    label: 'name',
    rules: { required: 'please Input' },
    requireIndicator: true,
    defineProps({ isError }) {
      return { error: isError };
    },
  })(
    <TextField
      size="small"
      placeholder="Please Input"
      style={{ width: '100%' }}
    />,
  );

  const renderSelect = render('select', {
    label: 'select',
  })(
    <Select size="small" variant="standard" style={{ width: '100%' }}>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value="ten">Ten</MenuItem>
      <MenuItem value="twenty">Twenty</MenuItem>
    </Select>,
  );

  const renderCheckbox = render('checkbox', {
    label: 'Checkbox',
    labelPosition: 'row',
  })(<Checkbox />);

  const renderSubmit = (
    <button
      onClick={async () => {
        await validate();
        console.log(model);
      }}
    >
      Submit
    </button>
  );

  return (
    <>
      {renderName}
      {renderSelect}
      {renderCheckbox}
      <div style={{ marginTop: '10px' }}>{renderSubmit}</div>
    </>
  );
}
