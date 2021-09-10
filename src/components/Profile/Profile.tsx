import React from "react";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ContentAreaContainer} from "./ContentArea/ContentAreaContainer";

//types:
type ProfilePropsType = {
    profile: any//!!!
}

//function component:
const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.profile}>

            <ProfileInfo profile={props.profile}/>
            <ContentAreaContainer/>

        </div>
    )
}

export
{
    Profile
}