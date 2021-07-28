import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {ActionType, RootReduxStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

//types:
type AppPropsType = {
    dispatch: (action: ActionType) => void
    store: RootReduxStoreType
}

//FC:
const App: React.FC< AppPropsType> = (props)=> {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/Profile"} render={() => <Profile
                    store={props.store}
                />}/>
                <Route path={"/Dialogs"} render={() => <DialogsContainer
                    store={props.store}
                />}/>
            </div>
        </div>

    );
}

export default App;
