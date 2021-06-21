import React from "react";
import styles from "./Dialogs.module.css"

type DialogsPropsType = {}


const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={styles.dialogsPage}>
            <div className={styles.dialogs}>
                <div className={styles.dialog}>Dimych</div>
                <div className={styles.dialog}>Victor</div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hello</div>
                <div className={styles.message}>How are u?</div>
            </div>
        </div>
    )
}

export {
    Dialogs
}