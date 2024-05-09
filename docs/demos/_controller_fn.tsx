import Button from '@components/Button';
import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model } = useForm({ name: 'name' });

  const [modelState, setModelState] = useState('');

  const renderName = render('name', {
    customErrTips: true,
    rules: { required: 'Please Input' },
  })(({ attrs, errorMessage, isError, clearValidate, ...restOptions }) => (
    <div>
      <input {...attrs} className="input" />
      {isError && <div>{errorMessage}</div>}
    </div>
  ));

  const onSubmit = () => setModelState(JSON.stringify(model));

  return (
    <>
      {renderName}
      {modelState}
      <Button onClick={onSubmit}>submit</Button>
    </>
  );
}
