import Button from '@components/Button';
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model, setState } = useForm({
    fields: [{ value: 0, uid: 1 }],
  });

  const { fields } = model;

  return (
    <>
      <div>
        {fields.map((f, i) =>
          render(`fields.${i}.value`, { label: `name${i}`, key: f.uid })(
            <input className="input" />,
          ),
        )}
      </div>
      <Button
        onClick={() => {
          for (let i = 0; i < 500; i++) {
            const len = model.fields.length;
            model.fields.push({ value: len, uid: model.fields.length + 1 });
          }
          setState();
        }}
      >
        Add 500 items
      </Button>
    </>
  );
}
