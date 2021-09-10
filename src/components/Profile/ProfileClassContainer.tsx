import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ProfileInitialStateType, setProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

//types:
type ProfilePropsType = {
    setProfile: (profile: ProfileInitialStateType) => void
    profile: any//!!!
}

//function component:
class ProfileClassContainer extends React.Component<ProfilePropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`).then(response => {
            this.props.setProfile(response.data.items);
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
const ProfileContainer = connect(mapStateToProps,{setProfile})(ProfileClassContainer);

export
{
    ProfileContainer
}