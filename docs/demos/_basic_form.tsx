import React from 'react';
import { Form, FormItem } from 'react-form-simple';

export default function App() {
  return (
    <Form>
      <FormItem
        getContent={({ attrs }) => <input {...attrs} className="input" />}
      />

      <FormItem
        bindId="select"
        getContent={({ attrs }) => (
          <select {...attrs}>
            <option value="name">name</option>
            <option value="age">age</option>
            <option value="email">email</option>
          </select>
        )}
      />
    </Form>
  );
}
