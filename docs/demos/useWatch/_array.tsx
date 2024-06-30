import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, useWatch, model } = useForm({
    array: [{ key: 1, itemValue: 'value' }],
  });

  const renderList = model.array.map((item, index) => (
    <div key={item.key}>{render(`array.${index}.itemValue`)(<input />)}</div>
  ));

  const [state, setState] = useState(JSON.stringify(model.array));

  useWatch(
    ({ model }) => model.array,
    (value, preValue) => {
      setState(JSON.stringify(value));
    },
  );

  return (
    <>
      <div>state: {state}</div>
      {renderList}
    </>
  );
}
