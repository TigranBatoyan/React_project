import React from 'react';
import './header.css';
import { Button } from 'react-bootstrap';

const Header = ({changeState, tab}) => {
   const removeToken = () =>{
       changeState('homePage')
       localStorage.removeItem('user')
   }

    return (
        <header className="main">
            <div>
                {
                    tab === 'homePage'
                        ?
                        <p className='main_1'>
                            <Button variant="outline-primary" onClick={() => changeState('loginPage')}>Log in</Button>
                            <Button variant="outline-primary" onClick={() => changeState('registrationPage')}>Register</Button>
                        </p> :
                        tab === 'loginPage'
                            ?
                            <p className='main_1'>
                                <Button variant="outline-primary" onClick={() => changeState('homePage')}>Home</Button>
                                <Button variant="outline-primary" onClick={() => changeState('registrationPage')}>Register</Button>
                            </p> :
                            tab === 'registrationPage'
                                ?
                                <p className='main_1'>
                                    <Button variant="outline-primary" onClick={() => changeState('homePage')}>Home</Button>
                                    <Button variant="outline-primary" onClick={() => changeState('loginPage')}>Log in</Button>
                                </p> :
                                tab === 'workspacePage'
                                    ?
                                    <p className='main_1'>
                                        <Button variant="outline-primary" onClick={() => changeState('homePage')}>Home</Button>
                                        <Button variant="outline-primary" onClick={removeToken}>Log out</Button>
                                    </p> : null
                }
            </div>
        </header>
    )
}
export default Header