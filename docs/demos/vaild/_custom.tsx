import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, validate, model } = useForm({ name: '' });

  const renderName = render('name', {
    rules: [
      { required: 'Please Input' },
      {
        validator(value) {
          if (String(value).length > 8) {
            return 'Max limit!';
          }
          return null;
        },
      },
    ],
    requireIndicator: true,
    label: 'name',
  })(<input />);

  const renderSubmit = (
    <button
      onClick={async () => {
        await validate();
        alert(JSON.stringify(model));
      }}
    >
      Submit
    </button>
  );

  return (
    <>
      {renderName}
      {renderSubmit}
    </>
  );
}
