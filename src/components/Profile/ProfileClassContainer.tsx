import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";

//types:
type ProfilePropsType = {}

//function component:
class ProfileClassContainer extends React.Component<ProfilePropsType, any> {

    render() {
        return (
            <>
                <Profile{...this.props}/>
            </>
        )
    }
}


const mapStateToProps ={}
const mapDispatchToProps = {}

/*const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileContainer);*/

export
{
    ProfileClassContainer
}