import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {ActionType, AppStateType, StoreType} from "./redux/store";
import {RootReduxStoreType} from "./redux/redux-store";

type AppPropsType = {
   /* state: AppStateType*/
    dispatch: (action: ActionType) => any

    store: RootReduxStoreType
}

function App(props: AppPropsType) {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/Profile"} render={() => <Profile
                    /*state={props.state}*/
                    dispatch={props.dispatch}

                    store={props.store}
                />}/>
                <Route path={"/Dialogs"} render={() => <Dialogs
                    /*state={props.state}*/
                    dispatch={props.dispatch}

                    store={props.store}
                />}/>
            </div>
        </div>

    );
}

export default App;
