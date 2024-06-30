import React, { useRef } from 'react';
import { Form, FormItem, type FormApis } from 'react-form-simple';

export default function App() {
  const formRef = useRef<FormApis>(null);
  return (
    <Form ref={formRef}>
      <FormItem
        rules={{ required: 'please Input' }}
        requireIndicator
        label="name"
        bindId="name"
        getContent={({ attrs }) => <input {...attrs} />}
      />

      <FormItem
        rules={{ required: 'please Input' }}
        requireIndicator
        label="name1"
        bindId="name"
        getContent={({ attrs }) => <input {...attrs} />}
      />

      <button
        onClick={async () => {
          await formRef.current?.validate();
          alert('pass!');
        }}
      >
        submit
      </button>
    </Form>
  );
}
