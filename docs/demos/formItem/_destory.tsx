import { Switch } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Form, FormItem, type ContextProps } from 'react-form-simple';

export default function App() {
  const formValueRef = useRef<Record<string, any>>({});
  const contextProps = useRef<ContextProps>({
    updated({ bindId, value }) {
      formValueRef.current[bindId] = value;
    },
    destroy({ bindId }) {
      formValueRef.current[bindId] = '';
    },
  }).current;

  const [destoryAble, setDestoryAble] = useState(false);

  return (
    <>
      destroy:{' '}
      <Switch
        onChange={(e) => {
          setDestoryAble(e.target.checked);
        }}
      />
      <Form contextProps={contextProps}>
        {!destoryAble && (
          <FormItem
            bindId="name"
            getContent={({ attrs }) => <input {...attrs} />}
            contextProps={contextProps}
          />
        )}

        <button
          onClick={() => {
            alert(JSON.stringify(formValueRef.current));
          }}
        >
          submit
        </button>
      </Form>
    </>
  );
}
