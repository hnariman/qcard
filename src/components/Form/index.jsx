import { Fragment, useContext, useId } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../context";
import QRCode from "react-qr-code";
import { v4 as uuidv4 } from 'uuid';

export const Form = () => {
    const { user: [data, setData] } = useContext(Context);
    const uuid = useId();
    const formFields = ["first", "last", "email", "twitter", "website", "mobile"];
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const hasMinimumTwoFields = Boolean(Object.values(data).filter(x => x.length > 2).length > 2);
        const url = "https://hnariman.github.io/qcard";
        const link = (url || window.location.origin) + "/" + uuidv4();
        hasMinimumTwoFields && setData({ ...data, link });
        console.log(data);
    }

    return (
        <>
            <h1>Please fill in the form</h1>
            <section className="form-page">
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    {formFields.map(item => (
                        <Fragment key={uuid + item}>
                            <input defaultValue="" placeholder={item} {...register(item)} />
                        </Fragment>
                    ))}
                    <input type="submit" />
                </form>
                {Boolean(data.link) &&
                    <QRCode
                        title="some title"
                        value={data.link}
                        bgColor="black"
                        fgColor="white"
                        level="H"
                        size={200}
                    />
                }
            </section>
        </>
    )
}
