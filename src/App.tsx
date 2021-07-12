import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {AppStateType} from "./redux/store";

type AppPropsType = {
    state: AppStateType
    addPost: (message: string)=>void
    setNewPostText: (text: string)=>void
}

function App(props: AppPropsType) {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/Profile"} render={() => <Profile
                    state={props.state}
                    addPost={props.addPost}
                    setNewPostText={props.setNewPostText}
                />}/>
                <Route path={"/Dialogs"} render={() => <Dialogs
                    dialogs={props.state.dialogPage.dialogs}
                    messages={props.state.dialogPage.messages}
                       />}/>
            </div>
        </div>

    );
}

export default App;
