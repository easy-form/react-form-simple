import Button from '@components/Button';
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, validate } = useForm({ name: '', age: '' });

  const renderName = render('name', { rules: { required: 'Please Input' } })(
    <input />,
  );
  const renderAge = render('age', {
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
  })(<input />);

  const renderSubmit = (
    <Button
      onClick={() => {
        validate();
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
