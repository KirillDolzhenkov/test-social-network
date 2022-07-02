import React from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import "./App.css";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Navbar} from "./components/Navbar/Navbar";
import {LoginPageContainer} from "./components/Login/Login";
import {Settings} from "./components/Settings/Settings";
import {AppStateType} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {ProfileContainer} from "./components/Profile/ProfileClassContainer";
import {UsersContainer} from "./components/Users/UsersClassContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {getInitializedSL} from "./selectors/app-selectors";
import { Error404 } from "./components/common/Error404/Error404";


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
        isInitialized: getInitializedSL(state)
    }
}

export const PATH = {
    PROFILE: "/Profile",
    NEWS: "/News",
    DIALOGS: "/Dialogs",
    USERS: "/Users",
    MUSIC: "/Music",
    SETTINGS: "/Settings",
    LOGIN: "/login",
}

class App extends React.Component<AppClassComponentPropsType> {

    componentDidMount() {
        //auth request:
        this.props.initializeApp();
    }

    render() {
        const {
            isInitialized,
        } = this.props

        return (
            <>
                {   //users don't see anything before app would be initialized:
                    !isInitialized
                        ? <Preloader/>
                        : <div className={"app-main"}>
                            <div className={"app-wrapper"}>
                                <HeaderContainer/>
                                <Navbar/>
                                <div className={"app-wrapper-content"}>
                                    {/*redirect from default path to main page when the app start: */}
                                    <Switch>
                                        {/*<Route exact path='/way-of-samurai-social-network/' render={() => <Redirect to={PATH.PROFILE} />} />*/}
                                        <Route exact path='/' render={() => <Redirect to={PATH.PROFILE} />} />

                                        {/*redirect user to his own profile page using userId: */}
                                        <Route path={"/Profile/:userId?"} render={() => <ProfileContainer />} />

                                        <Route path={PATH.NEWS} render={() => <News />} />
                                        <Route path={PATH.DIALOGS} render={() => <DialogsContainer />} />
                                        <Route path={PATH.USERS} render={() => <UsersContainer />} />
                                        <Route path={PATH.MUSIC} render={() => <Music />} />
                                        <Route path={PATH.SETTINGS} render={() => <Settings />} />
                                        <Route path={PATH.LOGIN} render={() => <LoginPageContainer />} />
                                        <Route render={() => <Error404/>}/>
                                    </Switch>
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