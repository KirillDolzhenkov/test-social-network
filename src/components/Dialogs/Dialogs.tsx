import React from "react";
import styles from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import { Message } from "./Message/Message";

type DialogsPropsType = {}


const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={styles.dialogsPage}>

            <div className={styles.dialogs}>
                <Dialog name={"Dimych"} id={1}/>
                <Dialog name={"Victor"} id={2}/>
            </div>

            <div className={styles.messages}>
                <Message message={"hello"}/>
                <Message message={"how are u?"}/>
            </div>

        </div>
    )
}

export {
    Dialogs
}