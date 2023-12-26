import Button from '@components/Button';
import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model } = useForm({
    name: '',
    age: '',
  });
  const [modelState, setModelState] = useState('');

  const renderName = render('name')(<input className="input" />);

  const renderAge = render('age')(<input className="input" />);

  const renderSubmit = (
    <Button onClick={() => setModelState(JSON.stringify(model))}>submit</Button>
  );
  return (
    <>
      {renderName}
      {renderAge}
      {modelState}
      {renderSubmit}
    </>
  );
}
