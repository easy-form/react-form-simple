import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, useWatch, model } = useForm({ name: 'name' });

  const renderName = render('name')(<input />);
  const [state, setState] = React.useState('');

  useWatch(
    ({ model }) => model,
    (value, preValue) => {
      setState(JSON.stringify(value)); // The type of value is Object type
    },
  );

  return (
    <>
      <div>state: {state}</div>
      {renderName}
    </>
  );
}
