import React, { useState } from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model, setValues, setValue } = useForm({
    name: 'name',
    arr: [{ name: 1 }],
    originData: { name: 2 },
  });

  const [modelState, setModelState] = useState('');

  const renderName = render('name')(<input />);

  const onSubmit = () => {
    setValues({ arr: [{ name: 222 }], originData: { name: 33 } });
    return;
    const datas = {
      name: 'name111',
      arr: [{ name: 2 }],
    };
    setValues({
      ...datas,
      originData: {
        ...datas,
        name: 'originName',
      },
    });
    console.log('model', model);
  };

  return (
    <>
      {renderName}
      {modelState}
      {render('originData.name')(<input />)}
      <button onClick={onSubmit}>submit</button>
    </>
  );
}
