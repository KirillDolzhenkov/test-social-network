import React from "react";
import styles from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

type DialogsPropsType = {}


type DialogsDataType = {
    id: number
    name: string
}
type MessagesDataType = {
    id: number
    message: string
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const DialogsData: Array<DialogsDataType> = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Victor"},
    ]

    const MessagesData: Array<MessagesDataType> = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are u?"},
    ]

    let dialogElements = DialogsData.map(d => <Dialog name={d.name} id={d.id}/>);
    let messageElements = MessagesData.map(m => <Message message={m.message} id={m.id}/>);

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