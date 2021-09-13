import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {addMessage, DialogsInitialStateType, setNewMessageText} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

//types:
type DialogsContainerPropsType = {}

type mapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
}
type mapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
    setNewMessageText: (newText: string) => void
}
type DialogsClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

//container component:
const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogPage
    }
}

//HOC:
const DialogsContainer = connect<mapStateToPropsType,
    mapDispatchToPropsType,
    DialogsContainerPropsType,
    AppStateType>(mapStateToProps, {addMessage,setNewMessageText})(Dialogs);

export {
    DialogsContainer
}


