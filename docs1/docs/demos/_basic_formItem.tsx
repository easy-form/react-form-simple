import Button from '@components/Button';
import React from 'react';
import { FormItem } from 'react-form-simple';

function App() {
  return (
    <>
      <FormItem
        bindId="name"
        getContent={({ attrs }) => <input className="input" {...attrs} />}
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
      <Button onClick={() => console.log()}>submit</Button>
    </>
  );
}

export default App;
