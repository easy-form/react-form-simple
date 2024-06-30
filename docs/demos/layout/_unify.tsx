import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render } = useForm(
    { name: '' },
    {
      formItemClassName: 'formItemClassName',
      formItemStyle: {},
      labelClassName: 'labelClassName',
      labelStyle: {},
      contentClassName: 'contentClassName',
      contentStyle: {},
      errorStyle: {},
      errorClassName: 'errorClassName',
    },
  );
  return render('name', {
    label: 'name',
    rules: { required: 'Please Input' },
    requireIndicator: true,
  })(<input />);
}
