import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {PostsDataType} from "./store";

type AppPropsType = {
    PostsData: Array<PostsDataType>
}

function App(props: AppPropsType) {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/Profile"} render={()=><Profile PostsData={props.PostsData}/>}/>
                    <Route path={"/Dialogs"} render={()=><Dialogs/>}/>
                </div>
            </div>

    );
}

export default App;
