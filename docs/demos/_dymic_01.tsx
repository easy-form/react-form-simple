import Button from '@components/Button';
import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, modal } = useForm({ fields: [] });
  const [fields, setFields] = useState([{ value: '', uid: 1 }]);
  modal.fields = fields as any;

  const renderFields = fields.map((f, i) =>
    render(`fields.${i}.value`, { labelPosition: 'top', key: f.uid })(
      <input className="input" />,
    ),
  );

  return (
    <>
      {renderFields}
      <Button
        onClick={() => {
          const len = modal.fields.length;
          setFields((pre) => [...pre, { value: len + '', uid: len + 1 }]);
        }}
      >
        add
      </Button>
      <Button
        plain
        style={{ marginLeft: '15px' }}
        onClick={() => {
          console.log(modal);
        }}
      >
        submit
      </Button>
    </>
  );
}
