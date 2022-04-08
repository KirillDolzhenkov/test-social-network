import {AppActionType} from "./redux-store";

//types:
export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
    time: string
}
export type DialogsInitialStateType = {
    dialogs: Array<DialogsDataType>,
    messages: Array<MessagesDataType>,
    newMessageText: string
}
export type DialogsActionType = ReturnType<typeof addMessage>

//initialState:
const initialState: DialogsInitialStateType = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sasha"},
    ],
    messages: [
        {id: 1, message: "hello", time: "test 4/1/2022, 10:38:18 PM"},
        {id: 2, message: "How are you?", time: "test 4/1/2022, 10:39:22 PM"},

    ],
    newMessageText: ""
}

//reducer:
const dialogsReducer = (state: DialogsInitialStateType = initialState, action: AppActionType) => { //need to rename to dialogReducer
    if (action.type === "SN/DIALOGS/ADD_MESSAGE") {
        const stateCopy = {...state}
        const newMessage: MessagesDataType = {
            id: Math.floor(new Date().valueOf() * Math.random()), //Creating a unique number with javascript time method
            message: action.newMessage,
            time: new Date().toLocaleString(), //Get Current Date & Time function
        };
        stateCopy.messages = [...state.messages, newMessage];
        return stateCopy;
    } else {
        return state;
    }
}

//action creators:
export const addMessage = (newMessage: string) => {
    return {type: "SN/DIALOGS/ADD_MESSAGE", newMessage} as const
}


export {
    dialogsReducer
}