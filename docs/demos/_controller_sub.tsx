import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, useSubscribe } = useForm({ name: 'name', age: 'age' });

  const renderName = render('name')(<input className="input" />);
  const renderAge = render('age')(<input className="input" />);

  const subscribeModal = useSubscribe(({ modal }) => modal);

  const subscribeAge = useSubscribe(({ modal }) => modal.age);

  console.log({ subscribeModal, subscribeAge });

  return (
    <>
      {renderName}
      {renderAge}
    </>
  );
}
