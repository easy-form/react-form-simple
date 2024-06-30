import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, useWatch, model } = useForm({
    array: [{ key: 1, itemValue: 'value' }],
  });

  const renderList = model.array.map((item, index) => (
    <div key={item.key}>{render(`array.${index}.itemValue`)(<input />)}</div>
  ));

  const [state, setState] = useState(model.array[0].itemValue);

  useWatch(
    ({ model }) => model.array[0].itemValue,
    (value, preValue) => {
      setState(value as string);
    },
  );

  return (
    <>
      <div>state: {state}</div>
      {renderList}
    </>
  );
}
