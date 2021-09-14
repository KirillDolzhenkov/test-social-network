import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ProfilePageType, setProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

//types:
type ProfileContainerPropsType = {}

type mapStateToPropsType = {
    profile: ProfilePageType | null
}
type mapDispatchToPropsType = {
    setProfile: (profile: ProfilePageType) => void
}
type ProfileClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

type  PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileClassContainerPropsType//.props.match FIX

//function component:
class ProfileClassContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
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