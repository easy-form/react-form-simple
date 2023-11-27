import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model } = useForm({ name: '' });
  //@ts-ignore
  const renderName = render('name')(<input />);

  const renderSubmit = (
    //@ts-ignore
    <button
      onClick={() => {
        console.log({ model });
      }}
    >
      submit
    </button>
  );

  return (
    //@ts-ignore
    <>
      {renderName}
      {renderSubmit}
    </>
  );
}
