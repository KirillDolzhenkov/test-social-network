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
import {AppStateType} from "./redux/redux-store";
import {compose} from "redux";
import {initialiseApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";

//types:
type mapStateToPropsType = {
    initialised: boolean
}
type mapDispatchToPropsType = {
    initialiseApp: any //need to change any
}
type AppComponentPropsType = mapStateToPropsType & mapDispatchToPropsType; //need to check types

//class component:
class AppClassComponent extends React.Component<AppComponentPropsType> {

    componentDidMount() {
        const {
            initialiseApp,
        } = this.props;

        //thunk dispatch (auth request):
        initialiseApp();
    }

    render() {
       /*return <Preloader/>*/
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

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialised
})

//HOC:
const App = compose(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(
        null,
    {initialiseApp}
)(AppClassComponent));


export {
    App
}
