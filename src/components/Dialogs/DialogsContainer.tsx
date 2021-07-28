import React from "react";
import {AppStateType, RootReduxStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {AddMessageAC, DialogsInitialStateType, SetNewMessageTextAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";

//types:
type DialogsContainerPropsType = {
    /*store: RootReduxStoreType*/
}

//FC:
/*const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

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
}*/

type mapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
}
type mapDispatchToPropsType = {
    sendMessage: (newMessageText: string)=> void
    updateNewMessageText: (newText: string)=> void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageText: string) => {
            dispatch(AddMessageAC(newMessageText));
        },
        updateNewMessageText: (newText: string) => {
            dispatch(SetNewMessageTextAC(newText));

        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export {
    DialogsContainer
}


