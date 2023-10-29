import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, useWatch } = useForm({ name: 'name', age: 'age' });

  const renderName = render('name')(<input />);
  const renderAge = render('age')(<input />);

  useWatch(
    ({ modal }) => [modal?.name, modal?.age],
    (value, preValue) => {
      console.log({ value, preValue });
    },
  );

  return (
    <>
      {renderName}
      {renderAge}
    </>
  );
}
