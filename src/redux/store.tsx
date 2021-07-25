//types:
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {ActionType} from "./redux-store";

type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
type DialogsDataType = {
    id: number
    name: string
}
type MessagesDataType = {
    id: number
    message: string
}
type AppStateType = {
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
type StoreType = {
    _state: AppStateType
    _callSubscriber: (state: AppStateType) => void
    subscribe: (observer: ()=> void) => void
    getState: () => AppStateType
    dispatch: (action: ActionType) => void
}

type storeActionType = ReturnType<typeof AddPostAC> //unused
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
const AddPostAC = (newPost: string) => {
    return {type: "SN/PROFILE/ADD_POST", newPost} as const
}
const SetNewPostTextAC = (newText: string) => {
    return {type: "SN/PROFILE/SET_NEW_POST_TEXT", newText} as const
}

const AddMessageAC = (newMessage: string) => {
    return {type: "SN/PROFILE/ADD_MESSAGE", newMessage} as const
}
const SetNewMessageTextAC = (newText: string) => {
    return {type: "SN/PROFILE/SET_NEW_MESSAGE_TEXT", newText} as const
}


export {
    store
}