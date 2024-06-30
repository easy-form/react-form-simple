import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

interface CustomProps {
  onChange?: (value: any) => void;
  value?: any;
}

const Custom = ({ onChange, value }: CustomProps) => {
  return (
    <input
      onChange={(e) => {
        onChange?.(e.target.value);
      }}
      value={value}
    />
  );
};

export default function App() {
  const { render, model } = useForm({ name: 'name' });

  const [modelState, setModelState] = useState('');

  const renderCustom = render('name', {
    formatChangeValue(value) {
      return value;
    },
  })(<Custom />);

  const onSubmit = () => setModelState(JSON.stringify(model));

  return (
    <>
      {renderCustom}
      {modelState}
      <button onClick={onSubmit}>submit</button>
    </>
  );
}
