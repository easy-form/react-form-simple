import React from 'react';
import { FormItem } from 'react-form-simple';

function App() {
  return (
    <>
      <FormItem
        getContent={() => <input placeholder="Please Input" />}
        label="name"
      />
      <FormItem
        getContent={() => <input placeholder="Please Input" />}
        label="age"
        labelPosition="top"
      />
      <FormItem
        getContent={() => (
          <select>
            <option value="name">name</option>
            <option value="age">age</option>
            <option value="email">email</option>
          </select>
        )}
      />
    </>
  );
}

export default App;
