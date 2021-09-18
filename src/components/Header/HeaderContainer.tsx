import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthInitialStateType, setAuthUserData} from "../../redux/auth-reducer";

//types:
type HeaderContainerPropsType = {
}
type mapStateToPropsType = {
    auth: AuthInitialStateType
}
type mapDispatchToPropsType = {
    setAuthUserData: (id: null | number,email: null | number,login: null | number)=> void;
}
type HeaderClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

//class container component:
class HeaderClassContainer extends React.Component<HeaderClassContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0){ //if user login!!!
                    let {id,email,login} = response.data.data.login;
                    this.props.setAuthUserData(id,email,login);
                }
            });
    }

    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        auth: state.auth
    }
}

const HeaderContainer = connect<mapStateToPropsType,
    mapDispatchToPropsType,
    HeaderContainerPropsType,
    AppStateType>(mapStateToProps, {setAuthUserData})(HeaderClassContainer);

export {
    HeaderContainer
}