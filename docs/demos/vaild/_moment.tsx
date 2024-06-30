import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, validate, model } = useForm({ name: '' });

  const renderName = render('name', {
    rules: { required: 'Please Input' },
    requireIndicator: true,
    label: 'name',
    trigger: 'manual',
  })(
    ({
      attrs,
      validate,
      clearValidate,
      reapplyValidator,
      removeValidator,
      setError,
    }) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          {...attrs}
          onChange={(e) => {
            attrs.onChange(e);
            validate(); // or setError;
          }}
        />
      </div>
    ),
  );

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
