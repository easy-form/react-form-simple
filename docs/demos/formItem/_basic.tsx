import React from 'react';
import { FormItem } from 'react-form-simple';

export default function App() {
  return (
    <>
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
    </>
  );
}
