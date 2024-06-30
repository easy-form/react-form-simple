import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

interface CustomProps {
  onChange?: (e: any) => void;
  value?: any;
}
const Custom = (props: CustomProps) => <input {...props} />;

export default function App() {
  const { render, model } = useForm({ name: 'name' });

  const [modelState, setModelState] = useState('');

  const renderCustom = render('name')(<Custom />);

  const onSubmit = () => setModelState(JSON.stringify(model));

  return (
    <>
      {renderCustom}
      {modelState}
      <button onClick={onSubmit}>submit</button>
    </>
  );
}
