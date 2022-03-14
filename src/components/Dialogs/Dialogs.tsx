import React, {ChangeEvent} from "react";

import style from "./Dialogs.module.css"
import {DialogsInitialStateType} from "../../redux/dialogs-reducer";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


//types:
export type DialogsPropsType = {
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
    let messageElements = dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);

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
        <div className={style.dialogsPage}>
            <div className={style.dialogs}>
                {
                    dialogElements
                }
            </div>

            <div className={style.messages}>
                <div className={style.messageElements}>
                    {
                        messageElements
                    }
                </div>
                <hr/>

                <div className={style.inputAreaElements}>
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
const AddMessageForm: React.FC<{}> = (props) => {
    return(
        <form>
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
    )
}

export {
    Dialogs
}
