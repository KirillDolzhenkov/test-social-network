import React from "react";
import {ContentArea} from "./ContentArea/ContentArea";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../store";


type ProfilePropsType = {
    PostsData: Array<PostsDataType>
}


const Profile: React.FC<ProfilePropsType> = (props) => {


    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <ContentArea PostsData={props.PostsData}/>
        </div>
    )
}

export {
    Profile
}