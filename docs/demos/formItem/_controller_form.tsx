import React, { useRef } from 'react';
import { Form, FormApis, FormItem } from 'react-form-simple';

export default function App() {
  const formValueRef = useRef<Record<string, any>>({});
  const formRef = useRef<FormApis>(null);

  return (
    <Form
      ref={formRef}
      contextProps={{
        updated({ value, bindId }) {
          formValueRef.current[bindId] = value;
        },
      }}
    >
      <FormItem
        label="name"
        bindId="name"
        getContent={({ attrs }) => <input {...attrs} />}
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
      />
      <button
        onClick={() => {
          formValueRef.current['name'] = 'jack';
          formRef.current?.setValue('name', 'jack');
        }}
      >
        setName
      </button>
      <button
        onClick={() => {
          formValueRef.current['info'] = 'email';
          formRef.current?.setValue('info', 'email');
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
    </Form>
  );
}
