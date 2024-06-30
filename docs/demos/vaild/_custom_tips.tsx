import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, validate, model } = useForm({ name: '' });

  const renderName = render('name', {
    rules: { required: 'Please Input' },
    requireIndicator: true,
    label: 'name',
    customErrTips: true,
  })(({ attrs, errorMessage, isError }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input {...attrs} />
      {isError && <span style={{ color: 'red' }}>{errorMessage}</span>}
    </div>
  ));

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
