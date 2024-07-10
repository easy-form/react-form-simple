import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, validate, model } = useForm({ name: '', email: '' });

  const renderName = render('name', {
    rules: { required: 'Please Input' },
    requireIndicator: true,
    label: 'name',
    trigger: 'manual',
  })(<input />);

  const renderEmail = render('email', {
    rules: { required: 'Please Input' },
    requireIndicator: true,
    label: 'Email',
  })(<input />);

  const renderSubmit = (
    <button
      onClick={async () => {
        await validate('email');
        alert(JSON.stringify(model));
      }}
    >
      Submit
    </button>
  );

  return (
    <>
      {renderName}
      {renderEmail}
      {renderSubmit}
    </>
  );
}
