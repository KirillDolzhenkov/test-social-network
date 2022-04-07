import React from "react";
import {Field, reduxForm} from "redux-form";

import styles from "./Dialogs.module.css"
import {DialogsInitialStateType} from "../../redux/dialogs-reducer";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


//types:
type confProps = {
    form: string
}
type AddMessageFormPropsType = any //need to fix any!!!
type DialogsPropsType = {
    dialogsPage: DialogsInitialStateType
    addMessage: (newMessageText: string) => void
}

//functional component:
const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const {
        dialogsPage,
        addMessage,
    } = props;

    //users list:
    let dialogElements = dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    //messages history:
    let messageElements = dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id} time={m.time}/>);

    const addNewMessage = (value: any) => { //need to fix any!!!
        if(value.newMessageText){
            addMessage(value.newMessageText);
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
                <AddMessageReduxForm onSubmit={addNewMessage}/>
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
            <div>
                <form onSubmit={handleSubmit} className={styles.inputAreaElements}> {/* <--need to rename class*/}
                    <div>
                        <Field
                            placeholder={"Write something"}
                            name={"newMessageText"}
                            component={"textarea"}
                            maxLength={300}
                        />
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            </div>
    )
}

//reduxForm HOC:
const AddMessageReduxForm = reduxForm<confProps,any>({form: 'dialogAddMessageReduxForm'})(AddMessageForm); //need to check types & fix any !!!

export {
    Dialogs
}
