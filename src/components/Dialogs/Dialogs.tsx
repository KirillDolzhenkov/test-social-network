import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, RootReduxStoreType} from "../../redux/redux-store";
import {AddMessageAC, SetNewMessageTextAC} from "../../redux/dialogs-reducer";

//types:
type DialogsPropsType = {
    dispatch: (action: ActionType) => void
    store: RootReduxStoreType
}

//FC:
const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const state = props.store.getState().dialogPage; // getState!!!
    const dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageElements = state.messages.map(m => <Message message={m.message} id={m.id}/>);

    const addMessageHandler = () => {
        if (state.newMessageText) {
            props.dispatch(AddMessageAC(state.newMessageText.trim()));
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget?.value;
        props.dispatch(SetNewMessageTextAC(newText));
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
                        /*ref={testButtonRef}*/
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
