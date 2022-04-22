import React from "react";

import defaultSmallUserPhoto from "../../../assets/images/default_user_photo.png";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfilePageType } from "../../../redux/profile-reducer";
import styles from "./ProfileInfo.module.css";
import preloaderStyle from "../../common/Preloader/Preloader.module.css";
import {ProfileStatus} from "./ProfileStatus";

//types:
type  ProfileInfoPropsType = {
    profile: ProfilePageType | null
    status: string | null
    updateStatus: (status: string) => void
}

//functional component:
const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    const {
        profile,
        status,
        updateStatus,
    } = props;

    //user would see preloader while response has not confirmed: // added to profileContainer
    /*if (!profile) {
        return (
            <>
                <div className={preloaderStyle.main}>
                    <Preloader/>
                </div>
            </>
        )
    }*/

    return (
        <div>
            <div className={styles.descriptionBlock}>

                <img src={
                    profile?.photos.large !== null
                        ? profile?.photos.large
                        : defaultSmallUserPhoto //defaultAsset
                } alt={"smallUserPhoto"}/>

                <div className={styles.items}>
                    <div className={styles.name}>
                        <b>{profile?.fullName}</b>
                    </div>
                    <ProfileStatus
                        updateStatus={updateStatus}
                        status={status}
                    />

                </div>
            </div>
        </div>
    )
}

export {
    ProfileInfo
}