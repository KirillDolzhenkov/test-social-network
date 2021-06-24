import React from "react";
import styles from "./ProfileInfo.module.css";

type  ProfileInfoPropsType = {}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return(
        <div >
            <div>
                <img src="https://i.redd.it/om4a8r7glhx21.png" alt=""/>
            </div>
            <div className={styles.descriptionBlock}>
                Ava + description
            </div >
        </div>
    )
}

export {
    ProfileInfo
}