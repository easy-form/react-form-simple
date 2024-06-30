import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

interface CustomProps {
  onChange?: (e: any) => void;
  value?: any;
}
const Custom = ({ onChange, value }: CustomProps) => (
  <input
    value={value}
    onChange={(e) => {
      onChange?.(e.target.value);
    }}
  />
);

export default function App() {
  const { render, model } = useForm({ name: 'name' });

  const [modelState, setModelState] = useState('');

  const renderCustom = render('name')(({ attrs }) => (
    <Custom
      {...attrs}
      onChange={(value) => {
        attrs.onChange({ target: { value } });
      }}
    />
  ));

  const onSubmit = () => setModelState(JSON.stringify(model));

  return (
    <>
      {renderCustom}
      {modelState}
      <button onClick={onSubmit}>submit</button>
    </>
  );
}
