import React from 'react';
import UsersContainer from "../../components/usersContainer";
import Descriptions from "../../components/descriptionContainer";
import './home.css'


const Home = () => {
    return (
        <div className="container_1">
            <UsersContainer/>
            <Descriptions/>
        </div>
    )
}
export default Home