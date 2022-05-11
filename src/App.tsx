import React from "react";
import {Route, withRouter} from "react-router-dom";
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
        //thunk dispatch (auth request):
        this.props.initializeApp()
    }

    render() {
        /* if (!this.props.initialised) {
             return <Preloader/>
         }*/

        return (
            <>
                {
                    this.props.isInitialized
                        ? <Preloader/>
                        : <div className={"app-main"}>
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
                }
            </>
        );


    }
}

//HOC:
/*const App = compose(
    connect<mapStateToPropsType,
        mapDispatchToPropsType, {}, AppStateType>(
        mapStateToProps,
        {initialiseApp}
    )(AppClassComponent));


export {
    App
}*/

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);