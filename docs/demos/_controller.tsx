import Button from '@components/Button';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model } = useForm({ name: 'name' });

  const [modelState, setModelState] = useState('');

  const renderName = render('name')(<input className="input" />);

  useEffect(() => {
    setTimeout(() => {
      model.name = 'name01';
    }, 2000);
  }, []);

  const onSubmit = () => setModelState(JSON.stringify(model));

  return (
    <>
      {renderName}
      {modelState}
      <Button onClick={onSubmit}>submit</Button>
    </>
  );
}
