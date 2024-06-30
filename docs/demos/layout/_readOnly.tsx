import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render } = useForm({ name: '' }, { readOnly: true });
  return render('name', {
    label: 'name',
  })(<input />);
}
