import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {UsersContainer} from "./components/Users/UsersClassContainer";
import {ProfileClassContainer} from "./components/Profile/ProfileClassContainer";

//types:
type AppPropsType = {}

//function component:
const App: React.FC< AppPropsType> = (props)=> {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/Profile"} render={() => <ProfileClassContainer/>}/>
                <Route path={"/Dialogs"} render={() => <DialogsContainer/>}/>
                <Route path={"/Users"} render={() => <UsersContainer/>}/>
                <Route path={"/News"} render={() => <News/>}/>
                <Route path={"/Music"} render={() => <Music/>}/>
                <Route path={"/Settings"} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
