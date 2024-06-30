import React from 'react';
import { Form, useForm } from 'react-form-simple';

export default function App() {
  const { render, model, forceUpdate } = useForm({
    fields: [{ value: 0, uid: 1 }],
  });
  const { fields } = model;
  const renderFields = fields.map((f, i) => (
    <span key={f.uid} style={{ marginRight: '10px' }}>
      {render(`fields.${i}.value`, {
        label: `name${i}`,
        labelPosition: 'top',
      })(<input />)}
    </span>
  ));

  return (
    <>
      <Form direction="row">{renderFields}</Form>
      <button
        onClick={() => {
          for (let i = 0; i < 500; i++) {
            const len = model.fields.length;
            model.fields.push({ value: len, uid: model.fields.length + 1 });
          }
          forceUpdate();
        }}
      >
        Add 500 items
      </button>
    </>
  );
}
