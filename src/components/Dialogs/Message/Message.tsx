import React from "react";

import styles from "./Message.module.css";
import defaultAvatar from "../../../assets/images/default_user_photo.png"

//types:
type MessagePropsType = {
    id: number //?
    message: string
    time: string
}

//function component:
const Message: React.FC<MessagePropsType> = (props) => {

    const {
        id, //?
        message,
        time,
    } = props;

    return (
        <div className={styles.message}>
            <img className={styles.img} alt="userPhoto" src={defaultAvatar}/>
            <div className={styles.content}>
                <div className={styles.name}>userName</div>
                <div className={styles.text}>{message}</div>
                <div className={styles.time}>{time}</div>
            </div>
        </div>

    )
}

export {
    Message
}