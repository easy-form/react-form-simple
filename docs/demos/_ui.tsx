import Button from '@components/Button';
import { Checkbox, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model, validate } = useForm(
    { name: '', select: 10, checkbox: true },
    { labelPosition: 'top' },
  );
  const renderName = render('name', {
    label: 'name',
    rules: { required: 'please Input' },
    requireIndicator: true,
    defineProps(options) {
      return { error: options.isError };
    },
  })(
    <TextField
      style={{ width: '300px' }}
      size="small"
      variant="standard"
      placeholder="Please Input"
      sx={{ '.MuiInput-input ': { color: 'initial' } }}
    />,
  );

  const renderSelect = render('select', {
    label: 'age',
  })(
    <Select size="small" variant="standard" style={{ width: '300px' }}>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
    </Select>,
  );

  const renderCheckbox = render('checkbox', {
    label: 'Checkbox',
    labelPosition: 'row',
  })(<Checkbox />);

  const renderSubmit = (
    <Button
      onClick={async () => {
        await validate();
        console.log(model);
      }}
    >
      Submit
    </Button>
  );

  return (
    <>
      {renderName}
      {renderSelect}
      {renderCheckbox}
      <div>{renderSubmit}</div>
    </>
  );
}
