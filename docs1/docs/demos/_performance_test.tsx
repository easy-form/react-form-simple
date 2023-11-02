import Button from '@components/Button';
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, modal, setState } = useForm({
    fields: [{ value: 0, uid: 1 }],
  });

  const { fields } = modal;

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
            const len = modal.fields.length;
            modal.fields.push({ value: len, uid: modal.fields.length + 1 });
          }
          setState();
        }}
      >
        Add 500 items
      </Button>
    </>
  );
}
