import Button from '@components/Button';
import React from 'react';
import { Form, FormItem, useForm } from 'react-form-simple';

export default function App() {
  const { contextProps, modal, validate } = useForm({
    name: '',
    age: 'age',
  });

  return (
    <>
      <Form contextProps={contextProps}>
        <FormItem
          defaultValue={modal.name}
          rules={{ required: 'Please Input' }}
          bindId="name"
          getContent={({ attrs }) => <input {...attrs} className="input" />}
        />
        <FormItem
          defaultValue={modal.age}
          rules={{ required: 'Please Select' }}
          bindId="age"
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

        <Button
          onClick={async () => {
            await validate();
            console.log(modal);
          }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}
