import React from 'react';
import './userList.css'

const UserList = ({user}) =>{
    return(
        <div className='list'>
            {/*<img src={user.avatar}  alt="" className='avatar' />*/}
            <label className='name'>{user.username}</label>
        </div>
    )
}
export default UserList