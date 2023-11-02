import Button from '@components/Button';
import { Checkbox, Input, Select } from 'antd';
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, modal, validate } = useForm(
    { name: '', select: 'jack', checkbox: true },
    { labelPosition: 'top' },
  );
  const renderName = render('name', {
    label: 'name',
    rules: { required: 'please Input' },
    requireIndicator: true,
    defineProps(options) {
      return { status: options.isError ? 'error' : '' };
    },
  })(<Input style={{ width: '300px' }} placeholder="Please Input" />);

  const renderSelect = render('select', {
    label: 'age',
    formatChangeValue: (e) => e,
  })(
    <Select
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
      ]}
      style={{ width: '300px' }}
    />,
  );

  const renderCheckbox = render('checkbox', {
    label: 'Checkbox',
    labelPosition: 'row',
  })(<Checkbox />);

  const renderSubmit = (
    <Button
      onClick={async () => {
        await validate();
        console.log(modal);
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
