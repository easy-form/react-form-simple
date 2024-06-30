import Joi from 'joi';
import React from 'react';
import { useForm } from 'react-form-simple';

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).required().messages({
    'string.min': '"username" should have a minimum length of {#limit}',
  }),
});

export default function App() {
  const { render, setError, model } = useForm({ username: '' });

  const renderUserName = render('username', {
    requireIndicator: true,
    label: 'username',
  })(<input />);

  const vaild = () => {
    const { error } = schema.validate(model);
    if (error) {
      const details = error.details || [];
      details.forEach((detail) => {
        setError(detail.context?.label, detail.message);
      });
    } else {
      setError(['username'], null);
      alert(JSON.stringify(model));
    }
  };

  const renderSubmit = <button onClick={vaild}>Submit</button>;

  return (
    <>
      {renderUserName}
      {renderSubmit}
    </>
  );
}
