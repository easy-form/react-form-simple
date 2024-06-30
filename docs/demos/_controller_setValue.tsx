import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model, setValue, setValues } = useForm({ name: 'name' });

  const [modelState, setModelState] = useState('');

  const renderName = render('name')(<input />);

  const onSubmit = () => setModelState(JSON.stringify(model));

  return (
    <>
      {renderName}
      {modelState}
      <button
        onClick={() => {
          setValue('name', 'jack');
        }}
      >
        setValue
      </button>
      <button
        onClick={() => {
          setValues({ name: 'Tom' });
        }}
      >
        setValues
      </button>
      <button onClick={onSubmit}>submit</button>
    </>
  );
}
