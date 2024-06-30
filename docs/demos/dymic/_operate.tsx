import React from 'react';
import { useForm } from 'react-form-simple';
import { getUuid } from 'react-form-simple/utils/util';

export default function App() {
  const { model, render, forceUpdate } = useForm({
    fieldsDymic: [{ uid: getUuid(), unit: 1, rate: 1, amount: 1 }],
  });
  const { fieldsDymic } = model;

  const renderFields = fieldsDymic.map((field, i) => (
    <div
      key={field.uid}
      style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}
    >
      {render(`fieldsDymic.${i}.unit`, { label: `unit${i}` })(
        <input
          type="number"
          onChange={(e) => {
            const value = e.target.value;
            field.amount = Number(value || 0) * Number(field.rate || 0);
          }}
        />,
      )}
      {render(`fieldsDymic.${i}.rate`, { label: `rate${i}` })(
        <input
          type="number"
          onChange={(e) => {
            const value = e.target.value;
            field.amount = Number(value || 0) * Number(field.unit || 0);
          }}
        />,
      )}
      {render(`fieldsDymic.${i}.amount`, { label: 'amount:' })(({ attrs }) => {
        return <span>{attrs.value}</span>;
      })}

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

  return (
    <>
      {renderFields}
      <button
        onClick={() => {
          model.fieldsDymic.push({
            unit: 1,
            uid: getUuid(),
            rate: 1,
            amount: 1,
          });
          forceUpdate();
        }}
      >
        add
      </button>
    </>
  );
}
