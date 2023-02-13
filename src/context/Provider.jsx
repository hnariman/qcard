import { useState } from "react";
import { Context } from "./Context";

export const Provider = ({ children }) => {
    const [data, setData] = useState([]);
    const value = { user: [data, setData] };
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider >
    )
}
