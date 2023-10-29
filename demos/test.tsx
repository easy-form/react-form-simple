import React, { useRef } from 'react';
import { useForm, UseFormReturnType } from 'react-form-simple';

const defaultModal = { name: 'name', age: '' };

function Child({
  useSubscribe,
}: {
  useSubscribe: UseFormReturnType<typeof defaultModal>['useSubscribe'];
}) {
  const value = useSubscribe(({ modal }) => modal.name);

  return (
    <>
      <strong>value:</strong> {value}
    </>
  );
}

export default function App() {
  const { render, useSubscribe } = useForm(defaultModal);

  const renderName = render('name', { label: 'name' })(<input />);
  const renderAge = render('age', { label: 'age' })(<input />);

  const count = useRef(0);
  count.current++;

  const renderNewName = <Child useSubscribe={useSubscribe} />;

  return (
    <>
      <div>
        {renderName}
        <span>{renderNewName}</span>
      </div>
      {renderAge}
      <div>renderings : {count.current}</div>
    </>
  );
}
