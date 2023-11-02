import Button from '@components/Button';
import React, { useRef } from 'react';
import { FormItem, FormItemApis } from 'react-form-simple';

export default function App() {
  const formItemRef = useRef<FormItemApis>(null);
  return (
    <>
      <FormItem
        ref={formItemRef}
        rules={{ required: 'Please Input' }}
        getContent={({ attrs }) => <input {...attrs} className="input" />}
        bindId="name"
      />
      <Button
        onClick={() => {
          formItemRef.current?.validate();
        }}
      >
        submit
      </Button>
    </>
  );
}
