import React from 'react';
import { useForm } from 'react-form-simple';
import { getUuid } from 'react-form-simple/utils/util';

export default function App() {
  const { model, render, validate, forceUpdate, useWatch } = useForm({
    fieldsDymic: [{ value: 0, uid: getUuid() }],
  });
  const { fieldsDymic } = model;

  const renderFields = fieldsDymic.map((field, i) => (
    <div
      key={field.uid}
      style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}
    >
      {render(`fieldsDymic.${i}.value`, {
        label: `name${i}`,
        rules: { required: 'Please Input' },
        requireIndicator: true,
      })(<input />)}
      <button
        onClick={() => {
          model.fieldsDymic.splice(i, 1);
          forceUpdate();
        }}
      >
        delete
      </button>
    </div>
  ));

  useWatch(
    ({ model }) => [model.fieldsDymic[0], model.fieldsDymic[1]],
    (value) => {
      alert(JSON.stringify(value));
    },
  );

  return (
    <>
      {renderFields}
      <button
        onClick={() => {
          const len = model.fieldsDymic.length;
          model.fieldsDymic.push({ value: len, uid: getUuid() });
          forceUpdate();
        }}
      >
        add
      </button>
      <button
        style={{ marginLeft: '15px' }}
        onClick={async () => {
          await validate();
          alert(JSON.stringify(model));
        }}
      >
        submit
      </button>
    </>
  );
}
