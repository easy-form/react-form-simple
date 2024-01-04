import Button from '@components/Button';
import React from 'react';
import { Form, FormItem, useForm } from 'react-form-simple';

export default function App() {
  const { contextProps, model, validate } = useForm({
    name: '',
    age: 'age',
  });

  return (
    <>
      <Form contextProps={contextProps}>
        <FormItem
          initialValue={model.name}
          rules={{ required: 'Please Input' }}
          bindId="name"
          getContent={({ attrs }) => <input {...attrs} className="input" />}
        />
        <FormItem
          initialValue={model.age}
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
            console.log(model);
          }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}
