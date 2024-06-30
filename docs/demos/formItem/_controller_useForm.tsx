import React from 'react';
import { Form, FormItem, useForm } from 'react-form-simple';

export default function App() {
  const { contextProps, model, validate } = useForm({
    name: 'name',
    select: 'age',
  });

  return (
    <Form contextProps={contextProps}>
      <FormItem
        requireIndicator
        label="name"
        initialValue={model.name}
        rules={{ required: 'Please Input' }}
        bindId="name"
        getContent={({ attrs }) => <input {...attrs} />}
      />
      <FormItem
        label="select"
        initialValue={model.select}
        rules={{ required: 'Please Select' }}
        bindId="select"
        getContent={({ attrs }) => {
          return (
            <select {...attrs}>
              <option value="name">name</option>
              <option value="age">age</option>
              <option value="email">email</option>
            </select>
          );
        }}
      />
      <button
        onClick={async () => {
          await validate();
          alert(JSON.stringify(model));
        }}
      >
        Submit
      </button>
    </Form>
  );
}
