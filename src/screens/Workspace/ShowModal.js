import React, {useState,useEffect} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {addPost, loginHandler} from "../../API";
import storage from "../../Helpers/storage";

const ShowModal = ({handleClose, show, userName}) => {
    const user = storage.get('user')
    const initialData = {author: userName, description: '', title: '', personId: user.id}
    const [data, setData] = useState(initialData)

    useEffect(()=>{
        setData({...data,author:userName})
    },[userName])

    const createPost = ({target: {name, value}}) => {
        setData({
            ...data,
            [name]: value
        })
    }

    const submitDataHandler = () => {
        addPost(data)
        handleClose()
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