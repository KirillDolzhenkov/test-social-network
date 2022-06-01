import React from "react";
import {Redirect, Route, withRouter} from "react-router-dom";
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
        this.props.initializeApp();
    }

    render() {
        //default path when the App start:
        const startingPath = '/' || '/way-of-samurai-social-network/'; //need to fix. not work with gitHubPages!

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
                                    {/*redirect from default startingPath to main page when the app start: */}
                                    <Route exact path={`${startingPath}`} render={() => <Redirect to='/Profile'/>}/>

                                    {/*redirect user to his own profile page using userId: */}
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