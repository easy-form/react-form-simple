import Button from '@components/Button';
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { modal, render, setState, validate } = useForm({
    fields: [{ value: '', uid: 1 }],
  });
  const { fields } = modal;

  const renderFields = fields.map((f, i) =>
    render(`fields.${i}.value`, {
      label: `name${i}`,
      labelPosition: 'top',
      rules: { required: 'Please Input' },
      key: f.uid,
    })(<input className="input" />),
  );

  return (
    <>
      {renderFields}
      <Button
        onClick={() => {
          const len = modal.fields.length;
          modal.fields.push({ value: len + '', uid: len + 1 });
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
          console.log(modal);
        }}
      >
        submit
      </Button>
    </>
  );
}
