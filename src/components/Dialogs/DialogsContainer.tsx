import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {addMessage, DialogsInitialStateType, setNewMessageText} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";

//types:
type mapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
}
type mapDispatchToPropsType = {
    sendMessage: (newMessageText: string) => void
    updateNewMessageText: (newText: string) => void
}

//container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageText: string) => {
            dispatch(addMessage(newMessageText));
        },
        updateNewMessageText: (newText: string) => {
            dispatch(setNewMessageText(newText));

        }
    }
}

//HOC:
const DialogsContainer = connect(mapStateToProps, {addMessage,setNewMessageText})(Dialogs);

export {
    DialogsContainer
}


