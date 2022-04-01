import React, {ChangeEvent} from "react";

import styles from "./Dialogs.module.css"
import {DialogsInitialStateType} from "../../redux/dialogs-reducer";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


//types:
type AddMessageFormPropsType = any //need to fix any!!!
type DialogsPropsType = {
    dialogsPage: DialogsInitialStateType
    addMessage: (newMessageText: string) => void
    setNewMessageText: (newText: string) => void
}

//functional component:
const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const {
        dialogsPage,
        addMessage,
        setNewMessageText,
    } = props;

    let dialogElements = dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messageElements = dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id} time={m.time}/>);

    const addMessageHandler = () => {
        if (dialogsPage.newMessageText) {
            addMessage(dialogsPage.newMessageText.trim());
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget?.value;
        setNewMessageText(newText);
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
                <div className={styles.messageElements}>
                    {
                        messageElements
                    }
                </div>
                <hr/>

                <div className={styles.inputAreaElements}>
                    <AddMessageForm/>
                    <div>
                        <textarea
                            value={dialogsPage.newMessageText}
                            maxLength={500}
                            onChange={onChangeHandler}
                            placeholder={"Write something"}
                            onKeyPress={onKeyPressHandler}
                        />
                    </div>
                    <div>
                        <button onClick={addMessageHandler}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

//functional component:
const AddMessageForm: React.FC<AddMessageFormPropsType> = (props) => {

    const {
        handleSubmit,
    } = props;

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/*<div>
                        <textarea
                            value={state.newMessageText}
                            maxLength={500}
                            onChange={onChangeHandler}
                            placeholder={"Write something"}
                            onKeyPress={onKeyPressHandler}
                        />
            </div>
            <div>
                <button onClick={addMessageHandler}>Send</button>
            </div>*/}

            </form>
        </>
    )
}

export {
    Dialogs
}
