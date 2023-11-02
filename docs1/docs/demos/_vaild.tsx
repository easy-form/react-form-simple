import Button from '@components/Button';
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, validate, modal } = useForm({ name: '', age: '' });

  const renderName = render('name', {
    rules: { required: 'Please Input' },
    requireIndicator: true,
    label: 'name',
  })(<input className="input" />);

  const renderAge = render('age', {
    label: 'age',
    rules: [
      { required: 'Please Input' },
      {
        validator(value) {
          if (value < 10) {
            return 'Min 10';
          }
          return '';
        },
      },
    ],
  })(<input className="input" />);

  const renderSubmit = (
    <Button
      onClick={async () => {
        await validate();
        console.log(modal);
      }}
    >
      Submit
    </Button>
  );

  return (
    <>
      {renderName}
      {renderAge}
      {renderSubmit}
    </>
  );
}
