import { useContext, useId } from "react";
import { useParams } from "react-router-dom"
import { Context } from "../../context/";

export const Card = () => {
    const uuid = useId();
    const { id } = useParams();
    const { user: [data] } = useContext(Context);

    return (
        <dd className="user-card">
            <h1>Result for user: {id}</h1>
            {Object.entries(data).map(([key, value], index) => (
                <dl className="row" key={uuid + index}>
                    <span>{key}</span>
                    <span>{value}</span>
                </dl>
            ))}
        </dd>
    )
}
