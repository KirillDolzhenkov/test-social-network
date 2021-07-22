

//types:
import { dialogsReducer } from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type AppStateType = {
    dialogPage: {
        dialogs: Array<DialogsDataType>,
        messages: Array<MessagesDataType>,
        newMessageText: string
    }
    profilePage: {
        posts: Array<PostsDataType>
        newPostText: string
    }
}
export type StoreType = {
    _state: any
    _callSubscriber: (state: AppStateType) => void
    subscribe: (observer: any) => void
    getState: () => AppStateType
    dispatch: (action: ActionType) => void
}

export type ActionType = ReturnType<typeof AddPostAC>
    | ReturnType<typeof SetNewPostTextAC>
    | ReturnType<typeof AddMessageAC>
    |ReturnType<typeof SetNewMessageTextAC>

//BLL:
const store: StoreType = {
    _state: {
        dialogPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Victor"},
            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How are u?"},
            ],
            newMessageText: ""
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hi dude", likesCount: 12},
                {id: 2, message: "nice photos!", likesCount: 11},
            ],
            newPostText: ""
        }
    },
    _callSubscriber(state: AppStateType) {
    }, // _reRenderEntireThree
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

//custom dispatch:
    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);

        this._callSubscriber(this._state); // _reRenderEntireThree
    }
}

//action creators:
export const AddPostAC = (newPost: string) => {
    return {type: "ADD-POST", newPost} as const
}
export const SetNewPostTextAC = (newText: string) => {
    return {type: "SET-NEW-POST-TEXT", newText} as const
}

export const AddMessageAC = (newMessage: string) => {
    return {type: "ADD-MESSAGE", newMessage} as const
}
export const SetNewMessageTextAC = (newText: string) => {
    return {type: "SET-NEW-MESSAGE-TEXT", newText} as const
}


export {
    store
}