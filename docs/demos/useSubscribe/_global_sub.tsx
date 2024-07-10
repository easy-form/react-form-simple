import React from 'react';
import { useForm, useSubscribe } from 'react-form-simple';

export default function App() {
  const { render, contextProps } = useForm({ name: 'name' });

  const renderName = render('name')(<input />);
  const subscribeName = useSubscribe(contextProps, ({ model }) => model.name);

  return (
    <>
      <div>newNameValue: {subscribeName}</div>
      {renderName}
    </>
  );
}
