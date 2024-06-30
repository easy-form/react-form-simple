import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, validate, removeValidator, model, reapplyValidator } =
    useForm({
      name: '',
    });

  const renderName = render('name', {
    rules: { required: 'Please Input' },
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
  const renderRemoveValidator = (
    <button
      onClick={() => {
        removeValidator();
      }}
    >
      removeValidator
    </button>
  );
  const renderReapplyValidator = (
    <button
      onClick={() => {
        reapplyValidator();
        validate();
      }}
    >
      reapplyValidator
    </button>
  );

  return (
    <>
      {renderName}
      {renderSubmit}
      {renderRemoveValidator}
      {renderReapplyValidator}
    </>
  );
}
