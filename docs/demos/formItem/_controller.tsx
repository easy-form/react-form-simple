import React, { useRef } from 'react';
import { FormItem, FormItemApis } from 'react-form-simple';

export default function App() {
  const formValueRef = useRef<Record<string, any>>({});
  const formNameRef = useRef<FormItemApis>(null);
  const formInfoRef = useRef<FormItemApis>(null);

  return (
    <>
      <FormItem
        label="name"
        bindId="name"
        getContent={({ attrs }) => <input {...attrs} />}
        contextProps={{
          updated({ value }) {
            formValueRef.current['name'] = value;
          },
        }}
        ref={formNameRef}
      />
      <FormItem
        label="select"
        bindId="info"
        getContent={({ attrs }) => (
          <select {...attrs}>
            <option value="name">name</option>
            <option value="age">age</option>
            <option value="email">email</option>
          </select>
        )}
        ref={formInfoRef}
      />
      <button
        onClick={() => {
          formValueRef.current['name'] = 'jack';
          formNameRef.current?.setValue('jack');
        }}
      >
        setName
      </button>
      <button
        onClick={() => {
          formValueRef.current['info'] = 'email';
          formInfoRef.current?.setValue('email');
        }}
      >
        setInfo
      </button>
      <button
        onClick={() => {
          alert(JSON.stringify(formValueRef.current));
        }}
      >
        submit
      </button>
    </>
  );
}
