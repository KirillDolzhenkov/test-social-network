import React from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../store";

type DialogsPropsType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={styles.dialogsPage}>

            <div className={styles.dialogs}>
                {
                    dialogElements
                }
            </div>

            <div className={styles.messages}>
                {
                    messageElements
                }
            </div>

        </div>
    )
}

export {
    Dialogs
}