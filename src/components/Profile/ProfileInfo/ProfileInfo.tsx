import React from "react";
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";

//types:
type  ProfileInfoPropsType = {
    profile: any//!!!
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
                {props.profile.photos.large}
                Ava + description

            </div>
        </div>
    )
}

export {
    ProfileInfo
}