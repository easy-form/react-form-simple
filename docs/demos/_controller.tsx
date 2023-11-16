import Button from '@components/Button';
import React, { useEffect } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model, reset } = useForm({ name: 'name' });

  const renderName = render('name')(<input className="input" />);

  useEffect(() => {
    setTimeout(() => {
      model.name = 'name01';
    }, 2000);
  }, []);

  const onsubmit = () => void console.log(model);

  return (
    <>
      {renderName}
      <Button onClick={onsubmit}>submit</Button>
    </>
  );
}