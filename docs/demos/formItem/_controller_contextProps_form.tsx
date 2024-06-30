import React, { useRef } from 'react';
import { Form, FormItem, type ContextProps } from 'react-form-simple';

export default function App() {
  const formValueRef = useRef<Record<string, any>>({});
  const contextProps = useRef<ContextProps>({
    updated({ bindId, value }) {
      formValueRef.current[bindId] = value;
    },
  }).current;

  return (
    <Form contextProps={contextProps}>
      <div>
        <FormItem
          label="name"
          bindId="name"
          getContent={({ attrs }) => <input {...attrs} />}
          contextProps={contextProps}
        />
      </div>
      <div>
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
      </div>
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
