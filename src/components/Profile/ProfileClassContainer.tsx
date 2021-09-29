import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ProfilePageType, setProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

//types:
type ProfileContainerPropsType = {}

type mapStateToPropsType = {
    profile: ProfilePageType | null
}
type mapDispatchToPropsType = {
    setProfile: (profile: ProfilePageType) => void
}
type  PathParamsType = {
    userId: any //number or string
}
type ProfileClassContainerPropsType = mapStateToPropsType
    & mapDispatchToPropsType
    & RouteComponentProps<PathParamsType>//.props.match.params FIX

//class container component:
class ProfileClassContainer extends React.Component<ProfileClassContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        usersAPI.getProfile(userId).then(response => {
            this.props.setProfile(response.data);
        });
    }

    render() {
        return <>
            <Profile{...this.props} profile={this.props.profile}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

//HOC:
const WithUrlDataContainerComponent = withRouter<any, any>(ProfileClassContainer);//need add types!!!

const ProfileContainer = connect<mapStateToPropsType,
    mapDispatchToPropsType,
    ProfileContainerPropsType,
    AppStateType>(mapStateToProps, {setProfile})(WithUrlDataContainerComponent);

export {
    ProfileContainer
}