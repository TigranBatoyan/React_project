import React, {useState} from 'react';
import './App.css';
import Home from "./screens/Home";
import Header from "./screens/Header";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Workspace from "./screens/Workspace";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [tab, setTab] = useState('homePage')

    const changeState = currentPage => {
        setTab(currentPage)
    }
    return (
        <div className="App">
            <Header changeState={changeState} tab={tab}/>
            {
                tab === 'homePage' ? <Home/> :
                    tab === 'loginPage' ? <Login changeState={changeState} tab={tab} /> :
                        tab === 'registrationPage' ? <Registration/> :
                            tab === 'workspacePage' ? <Workspace/> : null
            }
        </div>
    );
}

export default App;
