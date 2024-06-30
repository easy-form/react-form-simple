import React, { useRef } from 'react';
import { FormItem, type ContextProps } from 'react-form-simple';

export default function App() {
  const formValueRef = useRef<Record<string, any>>({});
  const contextProps = useRef<ContextProps>({
    updated({ bindId, value }) {
      formValueRef.current[bindId] = value;
    },
  }).current;

  return (
    <>
      <FormItem
        label="name"
        bindId="name"
        getContent={({ attrs }) => <input {...attrs} />}
        contextProps={contextProps}
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
        contextProps={contextProps}
      />
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
