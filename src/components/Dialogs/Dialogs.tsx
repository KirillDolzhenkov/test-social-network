import React, {createRef} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../redux/store";

type DialogsPropsType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const testButtonRef: any = createRef()
    const onClickHandler = () => {
        let message = testButtonRef.current?.value
        alert(message)
    }

    const dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

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
                <div>
                    <hr/>
                    <textarea
                        ref={testButtonRef}
                        placeholder={"Write something"}
                    />
                    <span>
                        <button onClick={onClickHandler}>send</button>
                    </span>
                </div>
            </div>

        </div>
    )
}

export {
    Dialogs
}