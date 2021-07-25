import React from "react";
import {ContentArea} from "./ContentArea/ContentArea";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {RootReduxStoreType, ActionType} from "../../redux/redux-store";

//types:
type ProfilePropsType = {
    dispatch: (action: ActionType) => void
    store: RootReduxStoreType
}

//FC:
const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <ContentArea
                dispatch={props.dispatch}
                store={props.store}
            />
        </div>
    )
}

export {
    Profile
}