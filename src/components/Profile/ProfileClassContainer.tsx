import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, ProfilePageType, updateUserStatus} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import {getAuthUserIdSL, getIsAuthSL, getProfileSL, getStatusSL} from "../../selectors/profile-selectors";
import {PATH} from "../../App";

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
        profile: getProfileSL(state),
        status: getStatusSL(state),
        isAuth: getIsAuthSL(state),
        authUserId: getAuthUserIdSL(state),
    }
}

//class container component:
class ProfileClassContainer extends React.Component<ProfileClassContainerPropsType> {

    componentDidMount() {
        //profile userId:
        let userId: string = this.props.match.params.userId;

        if (!userId) {
            userId = `${this.props.authUserId}`
            if (!userId) {
                //this.props.history.push('/login'); //test method?!
                return <Redirect to={PATH.LOGIN}/>
            }
        }
        if (userId) {
            //usersAPI.getProfile() & profileAPI.getUserStatus() responses, ("+" symbol for to string):
            this.props.getUserProfile(+userId);
            this.props.getUserStatus(+userId);
        }
    }

    render() {
        return <>
            {/*{
                this.props.profile
                    ? <Profile
                        {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateUserStatus}
                    />
                    //user would see preloader while response has not confirmed:
                    : <Preloader/> //need to delete this from profileInfo?
            }*/}
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateUserStatus}
            />
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

