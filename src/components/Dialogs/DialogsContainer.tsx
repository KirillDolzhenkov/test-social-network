import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {addMessage, DialogsInitialStateType, setNewMessageText} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

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

//HOC:
const DialogsContainer = connect(mapStateToProps, {addMessage,setNewMessageText})(Dialogs);

export {
    DialogsContainer
}


