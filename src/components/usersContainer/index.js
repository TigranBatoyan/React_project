import React,{useState,useEffect} from 'react';
import UserList from "./userList";
import './usersContainer.css';
import {url, endpoint_user} from "../../Costants/costants";

const UsersContainer = () =>{
    const[users,setUsers] = useState([])
    const[loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch(`${url}${endpoint_user}`)
            .then( response => {
                return response.json()
                    .then( data => {
                        setUsers(data);
                        setLoading(false)
                    });
            })
            .catch( err => {
                console.log("Error", err);
            });
    },[])
    return(
        <div className="container_item-left" id='content'>
            {
                loading && <div>...Loading</div>
            }
            {
                users.map(user => {
                    return <UserList key={user.id} user={user} />
                })
            }

        </div>
    )
}
export default UsersContainer