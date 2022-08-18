import React, {Suspense} from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import "./App.css";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Navbar} from "./components/Navbar/Navbar";
import {AppStateType} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {getInitializedSL} from "./selectors/app-selectors";
import {Page404} from "./components/common/Page404/Page404";
import {ErrorBoundary} from "./components/common/ErrorBoundary/ErrorBoundary";

//lazyLoadings:
const ProfileContainer = React.lazy(() =>
    import("./components/Profile/ProfileClassContainer")
        .then((module) => ({default: module.ProfileContainer}))
)
const DialogsContainer = React.lazy(() =>
    import("./components/Dialogs/DialogsContainer")
        .then((module) => ({default: module.DialogsContainer}))
)
const UsersContainer = React.lazy(() =>
    import("./components/Users/UsersClassContainer")
        .then((module) => ({default: module.UsersContainer}))
)
const LoginPageContainer = React.lazy(() =>
    import("./components/Login/Login")
        .then((module) => ({default: module.LoginPageContainer}))
)
const Music = React.lazy(() =>
    import("./components/Music/Music")
        .then((module) => ({default: module.Music}))
)
const News = React.lazy(() =>
    import("./components/News/News")
        .then((module) => ({default: module.News}))
)
const Settings = React.lazy(() =>
    import("./components/Settings/Settings")
        .then((module) => ({default: module.Settings}))
)

//types:
type mapStateToPropsType = {
    isInitialized: boolean
}
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type AppClassComponentPropsType = mapStateToPropsType & mapDispatchToPropsType;

//mapStateToProps & class component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isInitialized: getInitializedSL(state)
    }
}

//PATH for imports:
export const PATH = {
    PROFILE: "/Profile",
    NEWS: "/News",
    DIALOGS: "/Dialogs",
    USERS: "/Users",
    MUSIC: "/Music",
    SETTINGS: "/Settings",
    LOGIN: "/login",
}

//class component:
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

            <div>
                {//users don't see anything before app would be initialized:
                    !isInitialized
                        ? <Preloader/>
                        : <div className={"app-main"}>
                            <div className={"app-wrapper"}>
                                <HeaderContainer/>
                                <Navbar/>
                                <div className={"app-wrapper-content"}>
                                    <Suspense fallback={<Preloader/>}>
                                        <Switch>
                                            {/*redirect from default path to main page when the app start: */}
                                            <Route exact path={"/"} render={() => <Redirect to={PATH.PROFILE}/>}/>
                                            <Route exact path={"/way-of-samurai-social-network/"}
                                                   render={() => <Redirect to={PATH.PROFILE}/>}/>

                                            {/*redirect user to his own profile page using userId: */}
                                            <Route path={"/Profile/:userId?"} render={() => <ProfileContainer/>}/>

                                            <Route path={PATH.NEWS} render={() => <News/>}/>
                                            <Route path={PATH.DIALOGS} render={() => <DialogsContainer/>}/>
                                            <Route path={PATH.USERS} render={() => <UsersContainer/>}/>
                                            <Route path={PATH.MUSIC} render={() => <Music/>}/>
                                            <Route path={PATH.SETTINGS} render={() => <Settings/>}/>
                                            <Route path={PATH.LOGIN} render={() => <LoginPageContainer/>}/>

                                            {/*redirect to page 404 if the path does not exist: */}
                                            <Route path={"*"} render={() => <Page404/>}/>
                                        </Switch>
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                }
            </div>
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