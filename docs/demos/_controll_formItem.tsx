import Button from '@components/Button';
import React, { useEffect, useRef } from 'react';
import { FormItem, FormItemApis } from 'react-form-simple';

function App() {
  const formItemRef = useRef<FormItemApis>(null);
  useEffect(() => {
    formItemRef.current?.setValue('name123');
  }, []);
  return (
    <>
      <FormItem
        ref={formItemRef}
        rules={{ required: 'Please Input' }}
        bindId="name111"
        getContent={({ attrs }) => (
          <input placeholder="Please Input" {...attrs} />
        )}
        label="name"
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

export default App;
