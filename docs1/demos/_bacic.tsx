import React, { useRef } from 'react';
// import { useFormPlus } from 'react-form-simple';
import { Apis, ContextProps, FormItem } from 'react-form-simple';

export default function App() {
  // const { render } = useFormPlus({ name: '1' });
  const formItemRef = useRef<Apis.FormItemApis>(null);

  const formData = { name: '31' };
  const contextProps: ContextProps = {
    updated({ value }) {
      formData.name = value;
    },
  };

  const renderName = (
    <FormItem
      defaultValue={formData.name}
      bindId="name"
      rules={{ required: 'Please Input' }}
      contextProps={contextProps}
      label="name"
      getContent={({ attrs, validate }) => (
        <input placeholder="Please Input" {...attrs} />
      )}
      ref={formItemRef}
    />
  );

  const button = (
    <button
      onClick={() => {
        formItemRef.current
          ?.validate()
          .then((_) => {
            console.log('校验通过', formData);
          })
          .catch((e) => {
            console.log(e);
          });
      }}
    >
      submit
    </button>
  );

  // const renderName = render('name')(<input placeholder="Please Input" />);

  return (
    <>
      {renderName}
      {button}
    </>
  );
}
