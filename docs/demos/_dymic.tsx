import Button from '@components/Button';
import React from 'react';
import { useForm } from 'react-form-simple';
import { getUuid } from 'react-form-simple/utils/util';

export default function App() {
  const { model, render, validate } = useForm({
    fieldsDymic: [{ value: 0, uid: getUuid() }],
  });
  const { fieldsDymic } = model;

  const renderFields = fieldsDymic.map((field, i) => (
    <div key={field.uid} style={{ display: 'flex', alignItems: 'center' }}>
      {render(`fieldsDymic.${i}.value`, {
        label: `name${i}`,
        labelPosition: 'top',
        rules: { required: 'Please Input' },
      })(<input className="input" />)}
      <Button
        plain
        style={{ height: '30px', marginLeft: '10px' }}
        onClick={() => {
          model.fieldsDymic.splice(i, 1);
        }}
      >
        Delete
      </Button>
    </div>
  ));

  return (
    <>
      {renderFields}
      <Button
        onClick={() => {
          const len = model.fieldsDymic.length;
          model.fieldsDymic.push({ value: len, uid: getUuid() });
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
