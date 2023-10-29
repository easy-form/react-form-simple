import { useForm } from 'react-form-simple';

export default function App() {
  const { render, modal } = useForm({ name: '' });
  //@ts-ignore
  const renderName = render('name')(<input />);

  const renderSubmit = (
    //@ts-ignore
    <button
      onClick={() => {
        console.log({ modal });
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
