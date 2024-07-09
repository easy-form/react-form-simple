import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const form = useForm({ name: 'name' });
  const { render, model, watch } = form;

  const renderName = render('name')(<input />);

  const [newValue, setNewValue] = useState(model.name);
  const [preValue, setPreValue] = useState(model.name);

  const nameSymbol = useRef(Symbol('name')).current;

  useEffect(() => {
    const { unWatch } = watch(
      ({ model }) => model.name,
      (value, preValue) => {
        setNewValue(value as string);
        setPreValue(preValue as string);
      },
      nameSymbol,
    );
    return () => {
      unWatch(); // or form.unWatch(nameSymbol);
    };
  }, []);

  return (
    <>
      <div>newValue: {newValue}</div>
      <div>preValue: {preValue}</div>
      {renderName}
    </>
  );
}
