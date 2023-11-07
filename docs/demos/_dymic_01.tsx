import Button from '@components/Button';
import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model } = useForm({ fields: [] });
  const [fields, setFields] = useState([{ value: '', uid: 1 }]);
  model.fields = fields as any;

  const renderFields = fields.map((field, i) =>
    render(`fields.${i}.value`, { labelPosition: 'top', key: field.uid })(
      <input className="input" />,
    ),
  );

  return (
    <>
      {renderFields}
      <Button
        onClick={() => {
          const len = model.fields.length;
          setFields((pre) => [...pre, { value: len + '', uid: len + 1 }]);
        }}
      >
        add
      </Button>
      <Button
        plain
        style={{ marginLeft: '15px' }}
        onClick={() => {
          console.log(model);
        }}
      >
        submit
      </Button>
    </>
  );
}
