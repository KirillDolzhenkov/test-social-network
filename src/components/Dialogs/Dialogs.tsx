import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css"

type DialogsPropsType = {}


const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={styles.dialogsPage}>
            <div className={styles.dialogs}>
                <div className={styles.dialog + '' + styles.active}>
                    <NavLink to="/dialogs/1">Dimych</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/2">Victor</NavLink>
                </div>
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