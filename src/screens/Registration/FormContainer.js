import React from "react";
import {Button, Form} from "react-bootstrap";


const FormContainer = ({changeInputValue, handleSubmitData, data}) =>{
    return(
        <Form onSubmit={(e)=>e.preventDefault()}>
            <Form.Group controlId="formGroupText">
                <Form.Label>Username</Form.Label>
                <Form.Control value={data.username}  type="text" name={'username'} style={{margin:0,padding:0}}
                              placeholder="Enter username" onChange={changeInputValue} />
            </Form.Group>

            <Form.Group controlId="formGroupText">
                <Form.Label>Lastname</Form.Label>
                <Form.Control value={data.lastname} type="text" name={'lastname'} style={{margin:0,padding:0}}
                              placeholder="Enter lastname" onChange={changeInputValue} />
            </Form.Group>

            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={data.email} type="email" name={'email'}
                              placeholder="Enter email" onChange={changeInputValue} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={data.password} type="password" name={'password'} placeholder=" Enter password"
                              onChange={changeInputValue} />
            </Form.Group>

            <Button variant="primary" type="submit" size="lg" block onClick={handleSubmitData}>
                Submit
            </Button>
        </Form>
    )
}
export default FormContainer