import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model } = useForm({ name: 'name' });

  const [modelState, setModelState] = useState('');

  const renderName = render('name', {
    defineProps({ attrs }) {
      return {
        style: { borderColor: attrs.value ? '#00a67d' : '' },
      };
    },
  })(({ attrs, props }) => <input {...attrs} {...props} />);

  const onSubmit = () => setModelState(JSON.stringify(model));

  return (
    <>
      {renderName}
      {modelState}
      <button onClick={onSubmit}>submit</button>
    </>
  );
}
