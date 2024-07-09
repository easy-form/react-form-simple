import React, { useState } from 'react';
import { useForm, useWatch } from 'react-form-simple';

export default function App() {
  const { render, model, contextProps } = useForm({ name: 'name' });

  const renderName = render('name')(<input />);

  const [newValue, setNewValue] = useState(model.name);
  const [preValue, setPreValue] = useState(model.name);

  useWatch(
    contextProps,
    ({ model }) => model.name,
    (value, preValue) => {
      setNewValue(value as string);
      setPreValue(preValue as string);
    },
  );

  return (
    <>
      <div>newValue: {newValue}</div>
      <div>preValue: {preValue}</div>
      {renderName}
    </>
  );
}
