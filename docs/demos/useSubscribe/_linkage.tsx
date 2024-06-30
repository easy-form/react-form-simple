import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, useSubscribe } = useForm(
    { count: 1, count2x: '' },
    {
      labelPosition: 'top',
    },
  );

  const subscribeCount = useSubscribe(({ model }) => model.count);

  const renderCount = render('count', {
    label: 'count',
  })(<input type="number" />);

  const renderCount2x = render('count2x', {
    label: 'count2x',
    defineProps() {
      return { value: (subscribeCount || 0) * 2 };
    },
  })(<input />);

  return (
    <>
      {renderCount}
      {renderCount2x}
    </>
  );
}
