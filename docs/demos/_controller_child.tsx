import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model } = useForm({ obj: { name: '' } });

  const [modelState, setModelState] = useState('');

  const renderName = render('obj.name')(<input />);

  const onSubmit = () => setModelState(JSON.stringify(model));

  return (
    <>
      {renderName}
      {modelState}
      <button onClick={onSubmit}>submit</button>
    </>
  );
}
