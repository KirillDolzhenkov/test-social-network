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
import {getDialogsSL} from "../../selectors/dialogs-selectors";

//types:
type mapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
}
type mapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
}
type DialogsClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

//mapStateToProps & class container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: getDialogsSL(state),
    }
}

class DialogsClassContainer extends React.Component<DialogsClassContainerPropsType> {

    render(){
        return(
            <Dialogs
                {...this.props}
            />
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


