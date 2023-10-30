import Button from '@components/Button';
import React, { useEffect } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, modal } = useForm({ name: 'name' });

  const renderName = render('name')(<input className="input" />);

  useEffect(() => {
    setTimeout(() => {
      modal.name = 'name01';
    }, 2000);
  }, []);

  const onsubmit = () => void console.log(modal);

  return (
    <>
      {renderName}
      <Button onClick={onsubmit}>submit</Button>
    </>
  );
}
