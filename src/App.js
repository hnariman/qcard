import QRCode from "react-qr-code";
import { useForm } from 'react-hook-form';
import { Fragment, useState } from "react";
import { useId } from "react";

const formFields = ["first", "last", "email", "twitter", "website", "mobile"];

const App = () => {
  const uuid = useId();
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
          <Fragment key={uuid + item}>
            <label>{item} </label>
            <input defaultValue=" - " {...register(item)} />
          </Fragment>
        ))}
        <input type="submit" />
      </form>
      <hr />
      <h2>QR to share with friends:</h2>
      <QRCode
        title="some title"
        value={JSON.stringify(data)}
        bgColor="black"
        fgColor="white"
        level="H"
        size={200}
      />
      <hr />
      <h2>Result:</h2>
      <dd className="user-card">
        {Object.entries(data).map(([key, value], index) => (
          <dl key={uuid + index}>{key + " : " + value}</dl>
        ))}
      </dd>
    </section>
  )
}

export default App;
