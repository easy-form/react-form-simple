import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, validate, model } = useForm({ name: '' });
  const [draftAble, setDraftAble] = useState(false);

  const renderName = render('name', {
    rules: draftAble ? {} : { required: 'Please Input' },
    requireIndicator: true,
    label: 'name',
  })(<input />);

  const renderDraft = (
    <button
      onClick={() => {
        setDraftAble(true);
        setTimeout(async () => {
          await validate();
          alert(JSON.stringify(model));
          setDraftAble(false);
        });
      }}
    >
      draft
    </button>
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
      {renderDraft}
      {renderSubmit}
    </>
  );
}
