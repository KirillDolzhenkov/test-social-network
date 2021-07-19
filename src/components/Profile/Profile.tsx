import React from "react";
import {ContentArea} from "./ContentArea/ContentArea";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, AppStateType} from "../../redux/store";


type ProfilePropsType = {
    state: AppStateType
    addPost: (message: string)=>void
    setNewPostText: (text: string)=>void
    dispatch: (action: ActionType) => any
}

const Profile: React.FC<ProfilePropsType> = (props) => {


    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <ContentArea
                state={props.state.profilePage}
                addPost={props.addPost}
                setNewPostText={props.setNewPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export {
    Profile
}