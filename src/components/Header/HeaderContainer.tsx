import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthInitialStateType, setAuthUserData} from "../../redux/auth-reducer";

//types:
type HeaderContainerPropsType = {}
type mapStateToPropsType = {
    /*auth: AuthInitialStateType*/
    isAuth: boolean
    login: null | string
}
type mapDispatchToPropsType = {
    /* setAuthUserData: (id: null | number,email: null | number,login: null | number, isAuth: boolean)=> void;*/
    setAuthUserData: (data: AuthInitialStateType) => void;
}
type HeaderClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;


//class container component:
class HeaderClassContainer extends React.Component<HeaderClassContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    /*let {id,email,login} = response.data.data;*/
                    /* this.props.setAuthUserData(id,email,login, true);*/
                    let data = response.data.data;
                    this.props.setAuthUserData(data);
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
        /*auth: state.auth,*/
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const HeaderContainer = connect<mapStateToPropsType,
    mapDispatchToPropsType,
    HeaderContainerPropsType,
    AppStateType>(mapStateToProps, {setAuthUserData})(HeaderClassContainer);

export {
    HeaderContainer
}