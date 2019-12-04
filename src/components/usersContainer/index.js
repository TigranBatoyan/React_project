import React, {useState, useEffect} from 'react';
import UserList from "./userList";
import './usersContainer.css';
import {getUsers} from "../../API";
import { Spinner } from "react-bootstrap";

const UsersContainer = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUsers.then(data => {
            setUsers(data);
            setLoading(false)
        })
            .catch(err => {
                console.log("Error", err);
            });
    }, [])
    return (
        <div className="container_item-left" id='content'>
            {
                loading && <Spinner animation="border" variant="primary" />
            }
            {
                users.map(user => {
                    return <UserList key={user.id} user={user}/>
                })
            }

        </div>
    )
}
export default UsersContainer