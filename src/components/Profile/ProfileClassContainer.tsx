import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ProfilePageType, setProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

//types:
type ProfileContainerPropsType = {}
type mapStateToPropsType = {
    profile: ProfilePageType | null
}
type mapDispatchToPropsType = {
    setProfile: (profile: ProfilePageType) => void
}
type ProfileClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;


//function component:
class ProfileClassContainer extends React.Component<ProfileClassContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setProfile(response.data);
        });
    }

    render() {
        return (
            <>
                <Profile{...this.props} profile={this.props.profile}/>
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType)  => {
    return{
        profile: state.profilePage.profile
    }
}

//HOC:
const ProfileContainer = connect<mapStateToPropsType,
    mapDispatchToPropsType,
    ProfileContainerPropsType,
    AppStateType>(mapStateToProps,{setProfile})(ProfileClassContainer);

export {
    ProfileContainer
}