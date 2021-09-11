import React from "react";
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileInitialStateType, ProfilePageType} from "../../../redux/profile-reducer";

//types:
type  ProfileInfoPropsType = {
    profile: ProfilePageType | null//!!!!
}

//function component:
const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://i.redd.it/om4a8r7glhx21.png" alt=""/>
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                Ava + description

            </div>
        </div>
    )
}

export {
    ProfileInfo
}