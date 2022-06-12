import React from "react";

import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ContentAreaContainer} from "./ContentArea/ContentAreaContainer";
import {ProfilePageType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";

//types:
type ProfilePropsType = {
    profile: ProfilePageType | null
    status: string | null
    updateStatus: (status: string) => void
    isAuth: boolean
}

//functional component:
const Profile: React.FC<ProfilePropsType> = (props) => {

    const {
        profile,
        status,
        updateStatus,
        isAuth,
    } = props;

    //redirect users to loginPage after logout:
    if (!isAuth){
        return <Redirect to={"/login"}/>
    }

    return (
        <div className={styles.profile}>
            <ProfileInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
            />
            <ContentAreaContainer/>
        </div>
    )
}

export {
    Profile
}