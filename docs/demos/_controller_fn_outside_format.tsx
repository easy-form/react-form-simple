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

  const renderName = render('name', {
    formatChangeValue: (value) => value,
  })(({ attrs }) => (
    <div>
      <Custom
        value={attrs.value}
        onChange={(value) => {
          attrs.onChange(value);
        }}
      />
    </div>
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
