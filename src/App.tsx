import React from "react";
import {Route} from "react-router-dom";

import "./App.css";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {ProfileContainer} from "./components/Profile/ProfileClassContainer";
import {Music} from "./components/Music/Music";
import {UsersContainer} from "./components/Users/UsersClassContainer";
import {News} from "./components/News/News";
import {Navbar} from "./components/Navbar/Navbar";
import { LoginPageContainer} from "./components/Login/Login";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {AppStateType} from "./redux/redux-store";


//types:
type PropsType = {
    getAuthUserData: ()=> void
}
type mapDispatchToPropsType = {
    getAuthUserData: ()=> void
}

//functional component:
class AppClassComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <div className={"app-main"}>
                <div className={"app-wrapper"}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={"app-wrapper-content"}>
                        <Route path={"/Profile/:userId?"} render={() => <ProfileContainer/>}/>
                        <Route path={"/News"} render={() => <News/>}/>
                        <Route path={"/Dialogs"} render={() => <DialogsContainer/>}/>
                        <Route path={"/Users"} render={() => <UsersContainer/>}/>
                        <Route path={"/Music"} render={() => <Music/>}/>
                        <Route path={"/Settings"} render={() => <Settings/>}/>
                        <Route path={"/Login"} render={() => <LoginPageContainer/>}/>
                    </div>
                </div>
            </div>
        );
    };
}

const App = connect(null, {getAuthUserData})(AppClassComponent);

export {
    App
}
