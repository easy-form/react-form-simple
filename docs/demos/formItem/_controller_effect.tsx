import React, { useRef } from 'react';
import { Form, FormItem } from 'react-form-simple';

export default function App() {
  const formValueRef = useRef<Record<string, any>>({});
  const effectRef = useRef<Record<string, any>>({});
  return (
    <Form
      contextProps={{
        updated({ value, bindId }) {
          formValueRef.current[bindId] = value;
        },
        apiEffect({ setValue, bindId }) {
          effectRef.current[bindId] = setValue;
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
          effectRef.current['name']?.('jack');
        }}
      >
        setName
      </button>
      <button
        onClick={() => {
          formValueRef.current['info'] = 'email';
          effectRef.current['info']?.('email');
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
