import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render } = useForm({ name: '' });
  return render('name', {
    label: 'name',
    requireIndicator: <span style={{ color: 'red' }}>*</span>,
    noStyle: true,
  })(<input />);
}
