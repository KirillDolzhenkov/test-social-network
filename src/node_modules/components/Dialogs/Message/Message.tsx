import React from "react";

import styles from "components/Dialogs/Dialogs.module.css";

//types:
type MessagePropsType = {
    id: number
    message: string

}

//function component:
const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

export {
    Message
}