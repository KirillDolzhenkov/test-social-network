import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, ProfilePageType, updateUserStatus} from "../../redux/profile-reducer";
import {Profile} from "./Profile";

//types:
type mapStateToPropsType = {
    profile: ProfilePageType | null
    status: string | null
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}
type  PathParamsType = {
    userId: string //number or string (STRING!!!)
}
type ProfileClassContainerPropsType = mapStateToPropsType
    & mapDispatchToPropsType
    & RouteComponentProps<PathParamsType> //.props.match.params FIX

//class container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

class ProfileClassContainer extends React.Component<ProfileClassContainerPropsType> {

    componentDidMount() {
        let userId: string = this.props.match.params.userId;
        if (!userId) {
            /*userId = "2";*/
            userId = "8091";
        }
        this.props.getUserProfile(+userId); //usersAPI.getProfile(), ("+" for to string)
        this.props.getUserStatus(+userId); // profileAPI.getUserStatus()
    }

    render() {
        return (
            <>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateUserStatus}
                />
            </>
        )
    }
}

//HOC:
const ProfileContainer = compose<React.FC>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(
        mapStateToProps,
        {
            getUserProfile,
            getUserStatus,
            updateUserStatus,

        }
    ),
    withRouter,
)(ProfileClassContainer);

export {
    ProfileContainer
}

