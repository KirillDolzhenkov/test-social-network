import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {addMessage, DialogsInitialStateType, setNewMessageText} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";

//types:
type DialogsContainerPropsType = {}

type mapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
    isAuth: boolean //delete?
}
type mapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
    setNewMessageText: (newText: string) => void
}
type DialogsClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

//container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogPage,
        isAuth: state.auth.isAuth //delete?
    }
}


//HOC:
const DialogsContainer = connect<mapStateToPropsType,
    mapDispatchToPropsType,
    DialogsContainerPropsType,
    AppStateType>(mapStateToProps, {addMessage,setNewMessageText})(Dialogs);

/*const DialogsContainer = compose<React.FC>(
    connect<mapStateToPropsType, mapDispatchToPropsType,
        DialogsContainerPropsType, AppStateType>(mapStateToProps, {addMessage,setNewMessageText}),
)(DialogsClassContainer);*/

export {
    DialogsContainer
}


