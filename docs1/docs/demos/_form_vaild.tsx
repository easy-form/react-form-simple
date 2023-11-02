import Button from '@components/Button';
import React, { useRef } from 'react';
import { Form, FormApis, FormItem } from 'react-form-simple';

export default function App() {
  const formRef = useRef<FormApis>(null);
  return (
    <Form ref={formRef} direction="column">
      <FormItem
        rules={{ required: 'Please Input' }}
        getContent={({ attrs }) => <input {...attrs} className="input" />}
        bindId="name"
      />
      <FormItem
        rules={{ required: 'Please Input' }}
        getContent={({ attrs }) => <input {...attrs} className="input" />}
        bindId="name"
      />
      <Button
        onClick={() => {
          formRef.current?.validate();
        }}
      >
        submit
      </Button>
    </Form>
  );
}
