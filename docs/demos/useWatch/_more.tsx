import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, useWatch } = useForm({ name: 'name', age: 'age' });

  const renderName = render('name')(<input />);
  const renderAge = render('age')(<input />);

  const [state, setState] = React.useState('');

  useWatch(
    ({ model }) => [model.name, model.age],
    (value, preValue) => {
      setState(JSON.stringify(value)); // The type of value is Array type
    },
  );

  return (
    <>
      <div>state: {state}</div>
      {renderName}
      {renderAge}
    </>
  );
}
