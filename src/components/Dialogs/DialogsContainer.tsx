import React from "react";
import {RootReduxStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {AddMessageAC, SetNewMessageTextAC} from "../../redux/dialogs-reducer";

//types:
type DialogsContainerPropsType = {
    store: RootReduxStoreType
}

//FC:
const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

    const sendMessage = (newMessageText: string) => {
        props.store.dispatch(AddMessageAC(newMessageText));
    }
    const updateNewMessageText = (newText: string) => {
        props.store.dispatch(SetNewMessageTextAC(newText));
    }

    return (
        <div>
            <Dialogs
                dialogsPage={props.store.getState().dialogPage}
                sendMessage={sendMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </div>
    )
}

export {
    DialogsContainer
}


