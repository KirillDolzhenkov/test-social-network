import React, {ChangeEvent, createRef} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AppStateType} from "../../redux/store";

type DialogsPropsType = {
    state: AppStateType
    addMessage: (message: string)=>void
    setNewMessageText: (text: string)=>void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const testButtonRef: any = createRef()
    const onClickHandler = () => {
        let message = testButtonRef.currentTarget?.value;
        props.addMessage(message);
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.setNewMessageText(e.currentTarget?.value);
    }

    const dialogElements = props.state.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageElements = props.state.dialogPage.messages.map(m => <Message message={m.message} id={m.id}/>);

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
                        value={props.state.dialogPage.newMessageText}
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