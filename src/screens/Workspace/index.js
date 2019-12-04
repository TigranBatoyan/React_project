import React, {useState, useEffect} from "react";
import './workspace.css';
import Header from "./header";
import ItemList from "./ItemList";
import ShowModal from './ShowModal'

const Workspace = () => {
    const [show, setShow] = useState(false);
    const [name,setName] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))

        fetch(`https://it-blog-posts.herokuapp.com/api/people/${user.id}`)
            .then(data=>data.json()).then(data=>setName(`${data.lastName} ${data.userName}`))

    },[])
    return (
        <>
            <main>
               <Header name={name} handleShow={handleShow} />
               <ItemList />
               <ShowModal handleClose={handleClose} show={show} />
            </main>
            <footer></footer>
        </>

    )
}
export default Workspace