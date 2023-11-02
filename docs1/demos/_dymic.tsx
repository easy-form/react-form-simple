import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const form = useForm({
    fields: [{ value: '' }],
  });
  const { render, modal, setState, useWatch } = form;

  const { fields } = modal;

  const renderNames = fields.map((f, index) =>
    render(`fields.${index}.value`, {
      rules: { required: 'Please Input' },
      key: index,
    })(
      <input
        placeholder="Please Input"
        onChange={(e) => {
          if (e.target.value === '55') {
            console.log(e, 'ee');
            f.value = '55666';
          }
        }}
      />,
    ),
  );

  const button = (
    <button
      onClick={() => {
        for (let i = 0; i < 500; i++) {
          modal.fields = [...modal.fields, { value: i }];
        }
        setState();
      }}
    >
      add
    </button>
  );

  const button1 = (
    <button
      onClick={() => {
        console.log(modal.fields);
      }}
    >
      submit
    </button>
  );

  const button2 = (
    <button
      onClick={() => {
        modal.fields[5].value = '999';
      }}
    >
      change
    </button>
  );

  // const renderName = render('name')(<input placeholder="Please Input" />);

  return (
    <>
      {renderNames}
      {button}
      {button1}
      {button2}
    </>
  );
}
