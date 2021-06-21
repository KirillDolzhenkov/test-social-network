import React from "react";
import styles from "./Profile.module.css";


type ProfilePropsType = {}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.profile}>
            Content
        </div>
    )
}

export {
    Profile
}