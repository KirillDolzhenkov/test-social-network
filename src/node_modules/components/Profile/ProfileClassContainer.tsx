import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";


import {Profile} from "components/Profile/Profile";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {getUserProfile, ProfilePageType} from "../../redux/profile-reducer";


//types:
type ProfileContainerPropsType = {}

type mapStateToPropsType = {
    profile: ProfilePageType | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    /*setProfile: (profile: ProfilePageType) => void*/
    getUserProfile: (userId: number) => void
}
type  PathParamsType = {
    userId: any //number or string
}
type ProfileClassContainerPropsType = mapStateToPropsType
    & mapDispatchToPropsType
    & RouteComponentProps<PathParamsType> //.props.match.params FIX

//class container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
class ProfileClassContainer extends React.Component<ProfileClassContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId); //usersAPI.getProfile()
    }

    render() {
        return <>
            <Profile{...this.props} profile={this.props.profile}/>
        </>
    }
}

//HOC:
const ProfileContainer = compose<React.FC>(
    connect<mapStateToPropsType, mapDispatchToPropsType,
        ProfileContainerPropsType, AppStateType>(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileClassContainer);


/*const WithUrlDataContainerComponent = withRouter(ProfileClassContainer);
const ProfileContainer = WithAuthRedirect(connect<mapStateToPropsType,
    mapDispatchToPropsType,
    ProfileContainerPropsType,
    AppStateType>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));*/

export {
    ProfileContainer
}

