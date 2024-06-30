import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, validate, clearValidate, model } = useForm(
    {
      name: '',
      password: '',
    },
    { labelPosition: 'top' },
  );

  const renderName = render('name', {
    rules: { required: 'Please Input' },
    requireIndicator: true,
    label: 'name',
  })(<input />);
  const renderPassword = render('password', {
    rules: { required: 'Please Input' },
    requireIndicator: true,
    label: 'password',
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
  const renderClearNameVaildate = (
    <button
      onClick={() => {
        clearValidate('name');
      }}
    >
      clearNameValidate
    </button>
  );
  const renderClearAll = (
    <button
      onClick={() => {
        clearValidate();
      }}
    >
      clearAllValidate
    </button>
  );

  return (
    <>
      {renderName}
      {renderPassword}
      {renderSubmit}
      {renderClearNameVaildate}
      {renderClearAll}
    </>
  );
}
