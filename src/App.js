import React,{useState} from 'react';
import './App.css';
import Home from "./screens/Home";
import Header from "./screens/Header";
import Login from "./screens/Login";
import Registration from "./screens/Registration";

function App() {
  return (
    <div className="App">
      <header className="main">
        <Header />
      </header>
      <Home />
      {/*<Login />*/}
      {/*<Registration />*/}
    </div>
  );
}

export default App;
