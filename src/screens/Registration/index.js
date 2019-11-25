import React from 'react';
import './registration.css'

const Registration = () =>{
    return(
        <div className="container_register">
            <form className="register" onSubmit={(event)=>event.preventDefault()}>
                <input type="text" placeholder="Username" className='reg' id='name'/>
                <input type="text" placeholder="Lastname" className='reg' id='lastname'/>
                <input type="email" placeholder="Email" className='reg' id='email'/>
                <input type="password" placeholder="Password" className='reg' id='password'/>
                <div className="wrapper">
                    <input type="radio" name="contact"/> <p className="input_after">Male</p>
                    <input type="radio" name="contact"/> <p className="input_after">Female</p>
                </div>
                <div className="wrapper submit">
                    <input type="checkbox"/> <p className="input_after email">Send me Email</p>
                    <button className="btn btn-dark" id='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Registration