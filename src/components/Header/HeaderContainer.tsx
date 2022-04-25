import React from "react";
import {connect} from "react-redux";

import { logoutUserThunk, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";

//types:
type mapStateToPropsType = {
    isAuth: boolean
    login: null | string
}

type mapDispatchToPropsType = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => void //test
    logoutUserThunk: () => void
}
type HeaderClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

//mapStateToProps & class container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

class HeaderClassContainer extends React.Component<HeaderClassContainerPropsType> {
	render() {
		return <Header {...this.props} />
	}
}

//HOC:
const HeaderContainer = connect<mapStateToPropsType,
    mapDispatchToPropsType, {},
    AppStateType>(mapStateToProps, {
        setAuthUserData,
        logoutUserThunk,
    })(HeaderClassContainer);

export {
    HeaderContainer
}