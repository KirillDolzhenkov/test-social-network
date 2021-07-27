import React from "react";
import {ActionType, RootReduxStoreType} from "../../../redux/redux-store";

//types:
type ContentAreaContainerPropsType = {
    dispatch: (action: ActionType) => void
    store: RootReduxStoreType
}

//FC:
const ContentAreaContainer: React.FC<ContentAreaContainerPropsType> = (props) => {

    return (
        <div>

        </div>
    )
}

export {
    ContentAreaContainer
}