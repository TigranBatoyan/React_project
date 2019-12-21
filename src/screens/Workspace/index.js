import React, {useState, useEffect} from "react";
import './workspace.css';
import Header from "./header";
import ItemList from "./ItemList";
import ShowModal from './ShowModal';
import {getById, getPostsById} from "../../API";
import storage from "../../Helpers/storage";
import { Spinner } from "react-bootstrap";

const Workspace = () => {
    const [state, setState] = useState({
        show:false,
        posts:[],
        loading:true
    })

    const [name,setName] = useState('')
    const {show,posts,loading} = state

    const toggleButton = () => setState({...state,show:!show});
    const user = storage.get('user')
    useEffect(() => {
        getById(user.id)
            .then(data => data.json()).then(data => setName(`${data.username} ${data.lastname}`))

        getPostsById(user.id)
            .then(res=>res.json()).then(data=>{
                setState({...state,posts: data.reverse(),loading: false})
        })
        return () => {
            storage.remove('user')
        }
    },[])

    return (
        <>
            <main>
                <Header name={name} handleShow={toggleButton}/>
                <div className="right_item-main" id="description">
                {
                    loading && <Spinner animation="border" variant="primary" />
                }
                {
                    posts.map(post=>{
                        return <ItemList key={post.id} post={post}/>
                    })
                }
                </div>
                <ShowModal handleClose={toggleButton} show={show} userName={name}/>
            </main>
        </>

    )
}
export default Workspace