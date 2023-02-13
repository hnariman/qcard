import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const Main = () => {
    const url = 'https://my-json-server.typicode.com/hnariman/qcard/db';
    const [users, setUsers] = useState([]);

    const getData = useCallback(async () => {
        const { data } = await axios.get(url);
        setUsers(data);
    }, [users]);

    useEffect(() => { getData(); }, [])

    return (
        <>
            <h1>Welcome to qcard project</h1>
            <p>
                Some basic information about the project, how good and important it is
                and why everybody needs it.
            </p>
            <p>even some pictures and infographics maybe </p>
            {users?.users?.map(x => <UserCard user={x} />)}
        </>
    )
}


const UserCard = ({ user }) => {
    console.log('user inside', user);
    return (
        <div className="single-user-card">
            <p>{user.first}</p>
            <p>{user.last}</p>
            <p>{user.email}</p>
        </div>
    )
}