import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsInitialStateType} from "../../redux/dialogs-reducer";

//types:
type DialogsPropsType = {
    dialogsPage: DialogsInitialStateType
    sendMessage: (newMessageText: string) => void
    updateNewMessageText: (newText: string) => void
}

//FC:
const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const state = props.dialogsPage; // state!!!

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = state.messages.map(m => <Message message={m.message} id={m.id}/>);

    const addMessageHandler = () => {
        if (state.newMessageText) {
            props.sendMessage(state.newMessageText.trim());
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget?.value;
        props.updateNewMessageText(newText);
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addMessageHandler();
        }
    }

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
                        value={state.newMessageText}
                        onChange={onChangeHandler}
                        placeholder={"Write something"}
                        onKeyPress={onKeyPressHandler}
                    />
                    <span>
                        <button onClick={addMessageHandler}>send</button>
                    </span>
                </div>
            </div>

        </div>
    )
}

export {
    Dialogs
}
