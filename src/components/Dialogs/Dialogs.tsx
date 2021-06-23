import React from "react";
import styles from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import { Message } from "./Message/Message";

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


    return (
        <div className={styles.dialogsPage}>

            <div className={styles.dialogs}>
                <Dialog name={DialogsData[0].name} id={DialogsData[0].id}/>
                <Dialog name={DialogsData[1].name} id={DialogsData[1].id}/>
            </div>

            <div className={styles.messages}>
                <Message message={MessagesData[0].message} id={MessagesData[0].id}/>
                <Message message={MessagesData[1].message} id={MessagesData[1].id}/>
            </div>

        </div>
    )
}

export {
    Dialogs
}