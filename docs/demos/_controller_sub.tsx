import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, useSubscribe } = useForm({ name: 'name' });

  const renderName = render('name')(<input />);

  const subscribeModal = useSubscribe(({ modal }) => modal);

  return (
    <>
      {renderName}
      {JSON.stringify(subscribeModal)}
    </>
  );
}
