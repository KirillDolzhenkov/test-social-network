import React from "react";
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfilePageType} from "../../../redux/profile-reducer";
import defaultSmallUserPhoto from "../../../assets/images/defaultSmallUserPhoto.png";

//types:
type  ProfileInfoPropsType = {
    profile: ProfilePageType | null
}

//function component:
const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    const state = props.profile;//!!!

    if (!state) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={
                    state.photos.large !== null
                        ? state.photos.large
                        : defaultSmallUserPhoto //defaultAsset
                }/>
                <div>
                    <div><b>{state.fullName}</b></div>
                    <div>{state.aboutMe}</div>
                </div>
            </div>
        </div>
    )
}

export {
    ProfileInfo
}