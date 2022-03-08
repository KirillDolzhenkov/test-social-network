import React from "react";

import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ContentAreaContainer} from "./ContentArea/ContentAreaContainer";
import {ProfilePageType} from "../../redux/profile-reducer";

//types:
type ProfilePropsType = {
    profile: ProfilePageType | null
    status: string | null
    updateStatus: (status: string) => void
}

//functional component:
const Profile: React.FC<ProfilePropsType> = (props) => {

    const {
        profile,
        status,
        updateStatus,
    } = props;

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