import React from "react";
import {Button, Form, Modal} from "react-bootstrap";

const ShowModal = ({handleClose, show}) =>{
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton bg="info">
                <Modal.Title>Create new post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="email" name={'email'} placeholder="title"/>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="password" name={'password'} placeholder="description"/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" size="lg" block onClick={handleClose}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ShowModal