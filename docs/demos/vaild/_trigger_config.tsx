import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, validate, model } = useForm({ name: '' });

  const renderName = render('name', {
    rules: { required: 'Please Input' },
    requireIndicator: true,
    label: 'name',
    trigger: 'blur',
  })(<input />);

  const renderSubmit = (
    <button
      onClick={async () => {
        await validate();
        alert(JSON.stringify(model));
      }}
    >
      Submit
    </button>
  );

  return (
    <>
      {renderName}
      {renderSubmit}
    </>
  );
}
