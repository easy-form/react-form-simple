import { Switch } from '@mui/material';
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, useSubscribe } = useForm({ name: '', readOnly: false });
  const renderReadOnlyRadio = render('readOnly', {
    label: 'readOnly:',
  })(<Switch />);
  const readOnly = useSubscribe(({ model }) => model.readOnly);
  return (
    <>
      {renderReadOnlyRadio}
      {render('name', {
        label: 'name',
        readOnly,
        readOnlyText() {
          return <span>-</span>;
        },
      })(<input />)}
    </>
  );
}
