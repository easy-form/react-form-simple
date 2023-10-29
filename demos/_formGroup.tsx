import React, { useRef } from 'react';
import { Apis, ContextProps, Form, FormItem } from 'react-form-simple';

export default function App() {
  const formRef = useRef<Apis.FormApis>(null);

  const modal: any = { name: '', age: '' };
  const contextProps: ContextProps = {
    updated({ bindId, value }) {
      modal[bindId] = value;
    },
    reset({ bindId }) {
      modal[bindId] = '';
    },
  };

  const renderName = (
    <FormItem
      initialValue={''}
      bindId="name"
      rules={{ required: 'Please Input' }}
      label="name"
      getContent={({ attrs }) => {
        console.log({ attrs });
        return <input placeholder="Please Input" {...attrs} />;
      }}
    />
  );
  const renderAge = (
    <FormItem
      bindId="age"
      rules={{ required: 'Please Input age' }}
      label="age"
      getContent={({ attrs }) => <input {...attrs} />}
    />
  );

  const button = (
    <button
      onClick={() => {
        console.log(modal);
        formRef.current
          ?.validate()
          .then((_) => {
            console.log('校验通过', modal);
          })
          .catch((e) => {
            console.log(e);
          });
      }}
    >
      submit
    </button>
  );

  const reset = (
    <button
      onClick={() => {
        formRef.current?.reset();
      }}
    >
      reset
    </button>
  );

  return (
    <>
      <Form
        contextProps={contextProps}
        ref={formRef}
        direction="row"
        labelPosition="top"
      >
        {renderAge}
        {renderName}
        {renderName}
        {renderName}
        {renderName}
        {renderName}
        {renderName}
      </Form>
      {button}
      {reset}
    </>
  );
}
