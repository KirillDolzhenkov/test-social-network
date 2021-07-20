import {ActionType, AppStateType, MessagesDataType} from "./store";

const dialogsReducer = (state: AppStateType, action: ActionType) => {
    if (action.type === "ADD-MESSAGE") {
        const newMessage: MessagesDataType = {
            id: 4,
            message: state.dialogPage.newMessageText,
        }
        state.dialogPage.messages.push(newMessage);

        state.dialogPage.newMessageText = '';
    } else if (action.type === "SET-NEW-MESSAGE-TEXT") {
        state.dialogPage.newMessageText = action.newText;

    } else {
        return state;
    }
}

export {
    dialogsReducer
}