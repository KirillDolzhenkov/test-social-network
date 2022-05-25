import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, ProfilePageType, updateUserStatus} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import {Preloader} from "../common/Preloader/Preloader";

//types:
type mapStateToPropsType = {
    profile: ProfilePageType | null
    status: string | null
    isAuth: boolean
    authUserId: number | null  // number or string ???
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}
type  PathParamsType = {
    userId: string //need string
}
type ProfileClassContainerPropsType = mapStateToPropsType
    & mapDispatchToPropsType
    & RouteComponentProps<PathParamsType> //.props.match.params FIX


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authUserId: state.auth.id

    }
}

//class container component:
class ProfileClassContainer extends React.Component<ProfileClassContainerPropsType> {


    componentDidMount() {

        //profile userId:
        let userId: string = this.props.match.params.userId;

        if (!userId) {
            userId = `${this.props.authUserId}`
            if(!userId){
                this.props.history.push('/login'); //test method?!
            }
        }
        if (userId) {
            //usersAPI.getProfile() & profileAPI.getUserStatus() responses, ("+" for to string):
            this.props.getUserProfile(+userId);
            this.props.getUserStatus(+userId);
        }
    }

    render() {
        return <>
            {
                this.props.profile
                    ? <Profile
                        {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateUserStatus}
                    />
                    //user would see preloader while response has not confirmed:
                    : <Preloader/> //need to delete this from profileInfo?
            }
        </>
    }
}

//HOC:
const ProfileContainer = compose<React.FC>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(
        mapStateToProps, {
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

