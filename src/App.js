import QRCode from "react-qr-code";
import { useForm } from 'react-hook-form';
import { Fragment, useState } from "react";

const formFields = ["first", "last", "email", "twitter", "website", "mobile"];

const App = () => {
  // TODO: implement adding custom fields
  // const [fields, setFields] = useState(formFields);
  const [data, setData] = useState({});
  const { register, handleSubmit } = useForm();
  // TODO: implement to generate some link and place it in QR instead
  const onSubmit = data => {
    setData(data);
    console.log(data);
  }
  return (
    <section className="container">
      <h1>Please enter you data</h1>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {formFields.map(item => (
          <Fragment key={item}>
            <label>{item} </label>
            <input defaultValue=" - " {...register(item)} />
          </Fragment>
        ))}
        <input type="submit" />
      </form>
      <QRCode
        title="some title"
        value={JSON.stringify(data)}
        bgColor="black"
        fgColor="white"
        level="H"
        size={200}
      />
    </section>
  )
}

export default App;
