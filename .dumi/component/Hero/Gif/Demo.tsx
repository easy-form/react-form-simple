import React, { useState } from 'react';
import { useForm } from 'react-form-simple';
import imgs from '../imgs/useSubscribe.jpg';

export default function Demo() {
  const { render, model, useSubscribe, useWatch } = useForm({ name: 'name' });
  const renderName = render('name')(<input />);
  const [state, setState] = useState('');

  return (
    <>
      <img src={imgs} alt="" />
      {renderName}
      <button
        onClick={() => {
          setState(JSON.stringify(model));
        }}
      >
        Submit
      </button>
      <div>{state}</div>
      <div></div>
    </>
  );
}
