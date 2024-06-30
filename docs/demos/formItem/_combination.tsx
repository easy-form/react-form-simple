import { Switch } from '@mui/material';
import React from 'react';
import { Form, FormItem, useForm } from 'react-form-simple';

export default function App() {
  const { render, contextProps, model, validate } = useForm({
    name: 'name',
    select: 'age',
    switch: false,
  });
  return (
    <>
      <Form contextProps={contextProps}>
        <FormItem
          initialValue={model.name}
          bindId="name"
          label="name"
          customErrTips
          rules={[
            { required: 'Please Input' },
            {
              validator(value) {
                if (String(value).length <= 5) {
                  return 'Minimum length 6';
                }
                return '';
              },
            },
          ]}
          getContent={({ attrs, isError, errorMessage }) => (
            <div style={{ display: 'flex' }}>
              <input {...attrs} style={{ borderColor: isError ? 'red' : '' }} />
              {isError && <div style={{ color: 'red' }}>{errorMessage}</div>}
            </div>
          )}
          requireIndicator
        />
        {render('select', {
          label: 'select',
        })(
          <select>
            <option value="name">name</option>
            <option value="age">age</option>
            <option value="email">email</option>
          </select>,
        )}
      </Form>

      {render('switch', {
        label: 'switch',
      })(<Switch />)}

      <button
        onClick={async () => {
          await validate();
          alert(JSON.stringify(model));
        }}
      >
        submit
      </button>
    </>
  );
}
