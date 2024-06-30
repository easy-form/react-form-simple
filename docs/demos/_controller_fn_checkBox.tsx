import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model } = useForm({ switch: true });

  const [modelState, setModelState] = useState('');

  const renderName = render('switch')(({ attrs }) => (
    <input {...attrs} type="checkbox" checked={attrs.checked} />
  ));

  const onSubmit = () => setModelState(JSON.stringify(model));

  return (
    <>
      {renderName}
      {modelState}
      <button onClick={onSubmit}>submit</button>
    </>
  );
}
