import React from 'react';
import './login.css'

const Login = () =>{
    return(
        <div className="container_log">
            <form className="login" onClick="event.preventDefault()">
                <input type="email" placeholder="Email" className='reg' id='email'/>
                <input type="password" placeholder="Password" className='reg' id='password'/>
                <button className="btn btn-dark">Log In</button>
            </form>
        </div>
    )
}
export default Login