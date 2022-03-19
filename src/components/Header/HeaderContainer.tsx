import React from "react";
import {connect} from "react-redux";

import {getAuthUserData, logoutUserThunk, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";

//types:
type mapStateToPropsType = {
    isAuth: boolean
    login: null | string
}

type mapDispatchToPropsType = {
    getAuthUserData: () => void
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
	componentDidMount() {
		this.props.getAuthUserData(); /*<-request*/
	}

	render() {
		return (
			<>
				<Header {...this.props} />
			</>
		);
	}
}

//HOC:
const HeaderContainer = connect<mapStateToPropsType,
    mapDispatchToPropsType, {},
    AppStateType>(mapStateToProps, {
        getAuthUserData,
        setAuthUserData,
        logoutUserThunk,
    })(HeaderClassContainer);

export {
    HeaderContainer
}