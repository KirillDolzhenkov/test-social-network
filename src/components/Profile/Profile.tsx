import React from "react";
import {ContentArea} from "./ContentArea/ContentArea";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AppStateType} from "../../redux/store";


type ProfilePropsType = {
    state: AppStateType
    addPost: (message: string)=>void
    setNewPostText: (text: string)=>void
}


const Profile: React.FC<ProfilePropsType> = (props) => {


    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <ContentArea
                posts={props.state.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.state.profilePage.newPostText}
                setNewPostText={props.setNewPostText}
            />

        </div>
    )
}

export {
    Profile
}