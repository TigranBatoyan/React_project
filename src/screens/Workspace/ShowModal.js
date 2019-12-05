import React, {useState,useEffect} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {addPost} from "../../API";

const ShowModal = ({handleClose, show, userName}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const initialData = {author: userName, description: '', title: '', personId: user.id}
    const [data, setData] = useState(initialData)

    const submitDataHandler = () => {
        addPost(data).then(res=>console.log(res))
    }

    const createPost = ({target: {name, value}}) => {
        setData({
            ...data,
            [name]: value
        })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton bg="info">
                <Modal.Title>Create new post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name={'title'} placeholder="title" onChange={createPost}/>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name={'description'} placeholder="description" onChange={createPost}/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" size="lg" block onClick={submitDataHandler}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ShowModal