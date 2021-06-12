import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Content} from "./Content";
import {Navbar} from "./Navbar";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Content/>
        </div>
    );
}

export default App;
