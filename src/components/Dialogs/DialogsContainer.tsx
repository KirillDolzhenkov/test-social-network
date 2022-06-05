import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";

import {
    addMessage,
    DialogsInitialStateType,
} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {requestDialogs} from "../../selectors/dialogs-selectors";

//types:
type mapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
}

type mapDispatchToPropsType = {
    addMessage: (newId: number, newMessageText: string, newDate: string) => void
}
type DialogsClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

const createId = () => {
    return Math.floor(new Date().valueOf() * Math.random()); //Creating a unique number with javascript time method (???);
}
const createDate = () => {
    return new Date().toLocaleString(); //Get Current Date & Time function (???)
}

//mapStateToProps & class container component:
/*const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogPage,
    }
}*/

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: requestDialogs(state),
    }
}

class DialogsClassContainer extends React.Component<DialogsClassContainerPropsType> {

    render(){
        return(
            <Dialogs {...this.props} newId={createId()} newDate={createDate()}/>
        )
    }
}

//HOC:
const DialogsContainer = compose<React.FC>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(
        mapStateToProps, {addMessage, }),
    WithAuthRedirect,
)(DialogsClassContainer);

export {
    DialogsContainer
}


