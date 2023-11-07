import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, useSubscribe } = useForm({ name: 'name', age: 'age' });

  const renderName = render('name')(<input className="input" />);
  const renderAge = render('age')(<input className="input" />);

  const subscribemodel = useSubscribe(({ model }) => model);

  const subscribeAge = useSubscribe(({ model }) => model.age);

  console.log({ subscribemodel, subscribeAge });

  return (
    <>
      {renderName}
      {renderAge}
    </>
  );
}
