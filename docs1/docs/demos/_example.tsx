import Button from '@components/Button';
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, modal } = useForm({
    name: '',
    age: '',
  });
  const renderName = render('name')(<input className="input" />);

  const renderAge = render('age')(<input className="input" />);

  const renderSubmit = (
    <Button onClick={() => void console.log(modal)}>submit</Button>
  );
  return (
    <>
      {renderName}
      {renderAge}
      {renderSubmit}
    </>
  );
}
