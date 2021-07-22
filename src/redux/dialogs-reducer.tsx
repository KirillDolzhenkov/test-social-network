import {ActionType, DialogsDataType, MessagesDataType} from "./store";

type dialogsInitialStateType ={
        dialogs: Array<DialogsDataType>,
        messages: Array<MessagesDataType>,
        newMessageText: string
}

const initialState: dialogsInitialStateType = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sasha"},
    ],
    messages: [
        {id: 1, message: "hello"},
        {id: 2, message: "How are you?"},
    ],
    newMessageText: ""
}

const dialogsReducer = (state: dialogsInitialStateType, action: ActionType) => {
    if (action.type === "ADD-MESSAGE") {
        const newMessage: MessagesDataType = {
            id: 4,
            message: state.newMessageText,
        }
        state.messages.push(newMessage);
        state.newMessageText = '';
        return state;

    } else if (action.type === "SET-NEW-MESSAGE-TEXT") {
        state.newMessageText = action.newText;
        return state;

    } else {
        return state;
    }
}

export {
    dialogsReducer
}