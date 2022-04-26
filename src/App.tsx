import React from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import "./App.css";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {ProfileContainer} from "./components/Profile/ProfileClassContainer";
import {Music} from "./components/Music/Music";
import {UsersContainer} from "./components/Users/UsersClassContainer";
import {News} from "./components/News/News";
import {Navbar} from "./components/Navbar/Navbar";
import {LoginPageContainer} from "./components/Login/Login";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {getAuthUserData} from "./redux/auth-reducer";
import {AppStateType} from "./redux/redux-store";

//types:
type mapDispatchToPropsType = {
    getAuthUserData: () => void
}
type AppPropsType = {} & mapDispatchToPropsType; //need to check types

//class component:
class AppClassComponent extends React.Component<AppPropsType> {

    componentDidMount() {
        const {
            getAuthUserData,
        } = this.props;

        //auth request:
        getAuthUserData();
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

//HOC:
const App = connect<{}, mapDispatchToPropsType, {}, AppStateType>(
        null,
        {getAuthUserData,}
)(AppClassComponent);


export {
    App
}
