import React from "react";
import {connect} from "react-redux";

import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";

//types:
type mapStateToPropsType = {
    isAuth: boolean
    login: null | string
}

type mapDispatchToPropsType = {
    getAuthUserData: () => void;
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => void //test
}
type HeaderClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

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


const HeaderContainer = connect<mapStateToPropsType,
    mapDispatchToPropsType, {},
    AppStateType>(mapStateToProps, {
        getAuthUserData,
        setAuthUserData
    })(HeaderClassContainer);

export {
    HeaderContainer
}