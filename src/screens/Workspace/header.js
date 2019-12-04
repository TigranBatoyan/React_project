import React from "react";
import {Button} from "react-bootstrap";


const Header = ({handleShow, name}) =>{
    return(
        <section className="header_2">
            <nav className="left_section">
                <div className="image"></div>
                <label className="after_image">{name}</label>
            </nav>
            <nav className="right_section">
                <Button variant="primary" onClick={handleShow}>Create new Post</Button>
            </nav>
        </section>
    )
}
export default Header