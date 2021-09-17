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
            <div>
                <img src="https://i.redd.it/om4a8r7glhx21.png" alt=""/>
            </div>
            <div className={styles.descriptionBlock}>
                <img src={
                    state.photos.large !== null
                        ? state.photos.large
                        : defaultSmallUserPhoto //defaultAsset
                }/>
                <b>{state.fullName}</b>
                {/*<div>{state.aboutMe}</div>*/}
            </div>
        </div>
    )
}

export {
    ProfileInfo
}