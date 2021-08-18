import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {AddMessageAC, DialogsInitialStateType, SetNewMessageTextAC} from "../../redux/dialogs-reducer";
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
            dispatch(AddMessageAC(newMessageText));
        },
        updateNewMessageText: (newText: string) => {
            dispatch(SetNewMessageTextAC(newText));

        }
    }
}

//HOC:
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export {
    DialogsContainer
}


