import React,{useEffect} from 'react';
import UsersContainer from "../../components/usersContainer";
import Descriptions from "../../components/descriptionContainer";
import './home.css'


const Home = () => {
    return (
        <div>
            <div className="container">
                <UsersContainer />
                <Descriptions />
            </div>
        </div>
    )
}
export default Home