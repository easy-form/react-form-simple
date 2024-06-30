import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, useSubscribe } = useForm({ name: 'name', age: 'age' });

  const renderName = render('name')(<input />);
  const renderAge = render('age')(<input />);

  const subscribeName = useSubscribe(({ model }) => model.name);
  const subscribeAge = useSubscribe(({ model }) => model.age);

  return (
    <>
      <div>newNameValue: {subscribeName}</div>
      <div>newAgeValue: {subscribeAge}</div>
      {renderName}
      {renderAge}
    </>
  );
}
