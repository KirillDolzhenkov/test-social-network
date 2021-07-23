import React, {ChangeEvent, createRef} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, AddMessageAC, AppStateType, SetNewMessageTextAC, StoreType} from "../../redux/store";
import {RootReduxStoreType} from "../../redux/redux-store";

//types:
type DialogsPropsType = {
    /*state: AppStateType*/
    dispatch: (action: ActionType) => void

    store: RootReduxStoreType
}

//FC:
const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const state = props.store.getState(); // !!!
    const testButtonRef: any = createRef();

    const onClickHandler = () => {
        let newMessage = testButtonRef.currentTarget?.value;
        props.dispatch(AddMessageAC(newMessage));
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget?.value;
        props.dispatch(SetNewMessageTextAC(newText));
    }

    const dialogElements = state.dialogPage?.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageElements = state.dialogPage?.messages.map(m => <Message message={m.message} id={m.id}/>);

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
                        value={state.dialogPage?.newMessageText}
                        onChange={onChangeHandler}
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