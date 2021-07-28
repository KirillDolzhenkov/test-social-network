import React from "react";
import {ContentArea} from "./ContentArea/ContentArea";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {RootReduxStoreType, ActionType} from "../../redux/redux-store";
import {ContentAreaContainer} from "./ContentArea/ContentAreaContainer";

//types:
type ProfilePropsType = {
    store: RootReduxStoreType
}

//FC:
const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div className={styles.profile}>
            <ProfileInfo/>
           {/* <ContentAreaContainer
               /* store={props.store}*/
            />*/}
        </div>
    )
}

export
{
    Profile
}