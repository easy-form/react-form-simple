import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model } = useForm({ name: 'name' });

  const [modelState, setModelState] = useState('');

  const renderName = render('name')(
    ({
      attrs,
      validate,
      setError,
      clearValidate,
      reapplyValidator,
      reset,
      removeValidator,
      setValue,
      isError,
      errorMessage,
      props,
    }) => (
      <input
        {...attrs}
        onChange={(e) => {
          attrs.onChange(e);
          if (e.target.value === '') {
            setError('Please Input');
          } else {
            setError('');
          }
        }}
      />
    ),
  );

  const onSubmit = () => setModelState(JSON.stringify(model));

  return (
    <>
      {renderName}
      {modelState}
      <button onClick={onSubmit}>submit</button>
    </>
  );
}
