import React from "react";
import {ActionType, RootReduxStoreType} from "../../redux/redux-store";

//types:
type DialogsContainerPropsType = {
    dispatch: (action: ActionType) => void
    store: RootReduxStoreType
}

//FC:
const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

    return (
        <div>

        </div>
    )
}

export {
    DialogsContainer
}
