import Button from '@components/Button';
import React, { useEffect, useRef } from 'react';
import {
  Form,
  FormItem,
  type ContextProps,
  type FormApis,
} from 'react-form-simple';

export default function App() {
  const formRef = useRef<FormApis>(null);

  const model = useRef({
    name: '',
    age: '',
  }) as any;

  const contextProps = useRef<ContextProps>({
    updated({ bindId, value }) {
      model.current[bindId] = value;
    },
    reset({ bindId }) {
      model.current[bindId] = '';
      formRef.current?.setValue(bindId, '');
    },
  });

  useEffect(() => {
    const values = { name: 'name', age: 'age' };
    model.current = values;
    formRef.current?.setValue('name', 'name');
    formRef.current?.setValue('age', 'age');
  }, []);

  const renderName = (
    <FormItem
      bindId="name"
      rules={{ required: 'Please Input' }}
      label="name"
      getContent={({ attrs }) => {
        return (
          <input placeholder="Please Input" {...attrs} className="input" />
        );
      }}
    />
  );

  const renderAge = (
    <FormItem
      bindId="age"
      rules={{ required: 'Please Input age' }}
      label="age"
      getContent={({ attrs }) => (
        <select {...attrs}>
          <option value="name">name</option>
          <option value="age">age</option>
          <option value="email">email</option>
        </select>
      )}
    />
  );

  return (
    <Form
      ref={formRef}
      contextProps={contextProps.current}
      direction="column"
      labelWidth="40px"
    >
      {renderName}
      {renderAge}
      <FormItem label=" ">
        <Button
          onClick={() => {
            console.log(model.current);
          }}
        >
          submit
        </Button>

        <Button
          style={{ marginLeft: '15px' }}
          plain
          onClick={() => {
            formRef.current?.reset();
          }}
        >
          reset
        </Button>
      </FormItem>
    </Form>
  );
}
