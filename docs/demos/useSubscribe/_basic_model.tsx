import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, useSubscribe } = useForm({ name: 'name', age: 'age' });

  const renderName = render('name')(<input />);
  const renderAge = render('age')(<input />);

  const subscribemodel = useSubscribe(({ model }) => model);

  return (
    <>
      <div>newModelValue: {JSON.stringify(subscribemodel)}</div>
      {renderName}
      {renderAge}
    </>
  );
}
