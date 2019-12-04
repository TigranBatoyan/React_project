import React, {useState} from 'react';
import './login.css';
import {Form, Button} from "react-bootstrap";
import {loginHandler} from "../../API";

const Login = ({changeState, tab}) => {
    const initialData = {email:'',password:''}
    const [data, setData] = useState(initialData)

    const onChangeData = ({target:{name,value}}) =>{
        setData({
            ...data,
            [name]:value
        })
    }


    const onSubmitHandler = () => {
        loginHandler(data).then(response => {
            if (response.status === 200) {
                setData(initialData)
                return response.json()
            }
        })
        .then(data =>{
            const info=JSON.stringify({token:data.id,id:data.userId})
            localStorage.setItem('user',info)
            changeState('workspacePage')
        }).catch(error=>{
            throw new Error(error)
        })
    }
        return (
            <div className="container_log">
                <div className='border_reg'>
                    <Form onClick={(event) => event.preventDefault()}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name={'email'} placeholder="Enter email"
                                          onChange={onChangeData}/>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name={'password'} placeholder=" Enter password"
                                          onChange={onChangeData}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" size="lg" block onClick={onSubmitHandler}>
                            Log In
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
    export default Login