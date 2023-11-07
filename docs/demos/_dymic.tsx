import Button from '@components/Button';
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { model, render, setState, validate } = useForm({
    fields: [{ value: '', uid: 1 }],
  });
  const { fields } = model;

  const renderFields = fields.map((field, i) =>
    render(`fields.${i}.value`, {
      label: `name${i}`,
      labelPosition: 'top',
      rules: { required: 'Please Input' },
      key: field.uid,
    })(<input className="input" />),
  );

  return (
    <>
      {renderFields}
      <Button
        onClick={() => {
          const len = model.fields.length;
          model.fields.push({ value: len + '', uid: len + 1 });
          setState();
        }}
      >
        add
      </Button>
      <Button
        plain
        style={{ marginLeft: '15px' }}
        onClick={() => {
          validate();
          console.log(model);
        }}
      >
        submit
      </Button>
    </>
  );
}
