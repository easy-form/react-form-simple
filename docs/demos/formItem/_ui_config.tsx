import React from 'react';
import { Form, useForm, type FormProps } from 'react-form-simple';

export default function App() {
  const { render, contextProps } = useForm({ name: '' });

  const formProps: FormProps = {
    formItemClassName: 'formItemClassName',
    formItemStyle: {},
    labelClassName: 'labelClassName',
    labelStyle: {},
    contentClassName: 'contentClassName',
    contentStyle: {},
    errorStyle: {},
    errorClassName: 'errorClassName',
    fullWidth: true,
    formClassName: 'formClassName',
    formStyle: {},
    labelWidth: '',
    formatChangeValue(event) {},
    readOnly: false,
    readOnlyText() {
      return <></>;
    },
    trigger: 'change',
    direction: 'column',
    labelPosition: 'row',
    contextProps,
    noStyle: false,
  };

  return (
    <Form {...formProps}>
      {render('name', {
        label: 'name',
        rules: { required: 'Please Input' },
        requireIndicator: true,
      })(<input />)}
    </Form>
  );
}
