import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async (url) => {
            const res = await axios.get(url);

            try {
                setUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData("https://jsonplaceholder.typicode.com/users/");
    }, []);

    const putRows = () =>
        users.map((user, index) => (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
            </tr>
        ));

    return (
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Enlace</th>
                    </tr>
                </thead>
                <tbody>{putRows()}</tbody>
            </table>
        </div>
    );
}

export default Users;
