import React from "react";
import styles from "../Dialogs.module.css";

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

export {
    Message
}