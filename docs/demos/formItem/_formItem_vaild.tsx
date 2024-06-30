import React, { useRef } from 'react';
import { FormItem, type FormItemApis } from 'react-form-simple';

export default function App() {
  const formItemRef = useRef<FormItemApis>(null);
  return (
    <>
      <FormItem
        ref={formItemRef}
        rules={{ required: 'please Input' }}
        requireIndicator
        label="name"
        bindId="name"
        getContent={({ attrs }) => <input {...attrs} />}
      />

      <button
        onClick={async () => {
          await formItemRef.current?.validate();
          alert('pass!');
        }}
      >
        submit
      </button>
    </>
  );
}
