import React from "react";
import {Redirect, Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

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
import {AppStateType} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";

//types:
type mapStateToPropsType = {
    isInitialized: boolean
}
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type AppClassComponentPropsType = mapStateToPropsType & mapDispatchToPropsType;

//mapStateToProps & class container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isInitialized: state.app.initialized
    }
}

class App extends React.Component<AppClassComponentPropsType> {

    componentDidMount() {
        //auth request:
        this.props.initializeApp()

        return <Redirect to={"/Profile"}/>
    }

    render() {
        return (
            <>
                {   //users don't see anything before app would be initialized:
                    !this.props.isInitialized
                        ? <Preloader/>
                        : <div className={"app-main"}>
                            <div className={"app-wrapper"}>
                                <HeaderContainer/>
                                <Navbar/>
                                <div className={"app-wrapper-content"}>
                                    {/*there are default path when the App start: */}
                                    <Route exact path='/' render={() => <Redirect to='/profile'/>}/>
                                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                                    <Route path={"/news"} render={() => <News/>}/>
                                    <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                                    <Route path={"/music"} render={() => <Music/>}/>
                                    <Route path={"/settings"} render={() => <Settings/>}/>
                                    <Route path={"/login"} render={() => <LoginPageContainer/>}/>
                                </div>
                            </div>
                        </div>
                }
            </>
        );
    }
}

//HOC:
export default compose<React.ComponentType>(
    withRouter,
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(
        mapStateToProps, {initializeApp}
    )
)(App);