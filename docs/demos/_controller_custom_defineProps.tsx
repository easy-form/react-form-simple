import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

interface CustomProps {
  onChangeCustom?: (value: any) => void;
  valueCustom?: any;
}

const Custom = ({ onChangeCustom, valueCustom }: CustomProps) => {
  return (
    <input
      onChange={(e) => {
        onChangeCustom?.(e.target.value);
      }}
      value={valueCustom}
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
    defineProps(options) {
      return {
        onChangeCustom: options.attrs.onChange,
        valueCustom: options.attrs.value,
      };
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
