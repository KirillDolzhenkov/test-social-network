import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {ActionType, AppStateType} from "./redux/store";

type AppPropsType = {
    state: AppStateType
    dispatch: (action: ActionType) => any
}

function App(props: AppPropsType) {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/Profile"} render={() => <Profile
                    state={props.state}
                    dispatch={props.dispatch}
                />}/>
                <Route path={"/Dialogs"} render={() => <Dialogs
                    state={props.state}
                    dispatch={props.dispatch}
                />}/>
            </div>
        </div>

    );
}

export default App;
