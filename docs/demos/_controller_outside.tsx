import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model } = useForm({ count: 0 });

  const renderName = render('count')(<input type="number" />);

  const [modelState, setModelState] = useState('');
  const onSubmit = () => setModelState(JSON.stringify(model));

  return (
    <>
      {renderName}
      {modelState}
      <button onClick={onSubmit}>submit</button>
      <button
        onClick={() => {
          model.count += 1;
        }}
      >
        set count
      </button>
    </>
  );
}
