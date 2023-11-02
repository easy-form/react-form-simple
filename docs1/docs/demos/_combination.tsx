import React from 'react';
import { Form, FormItem, useForm } from 'react-form-simple';

export default function App() {
  const { render, contextProps, modal } = useForm({
    name: 'name',
    age: 'age',
    select: 'age',
  });
  return (
    <div>
      <Form direction="column" contextProps={contextProps}>
        <FormItem
          bindId="name"
          getContent={({ attrs }) => <input {...attrs} className="input" />}
          defaultValue={modal.name}
        />
        <FormItem
          bindId="age"
          getContent={({ attrs }) => <input {...attrs} className="input" />}
          defaultValue={modal.age}
        />
        {render('select')(
          <select>
            <option value="name">name</option>
            <option value="age">age</option>
            <option value="email">email</option>
          </select>,
        )}
      </Form>
    </div>
  );
}
