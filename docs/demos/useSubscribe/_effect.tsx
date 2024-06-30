import React, { useMemo } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, useSubscribe } = useForm({ name: 'name' });

  const renderName = render('name')(<input />);

  const subscribeName = useSubscribe(({ model }) => model.name);

  const strMemo = useMemo(() => `memo-${subscribeName}`, [subscribeName]);

  return (
    <>
      <div>memoValue: {strMemo}</div>
      {renderName}
    </>
  );
}
