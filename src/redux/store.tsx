//types:
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
    _state: AppStateType
    _callSubscriber: (state: AppStateType) => void
    subscribe: (observer: any) => void
    getState: () => AppStateType
    dispatch: (action: ActionType) => any
}

export type ActionType = ReturnType<typeof AddPostAC>
    | ReturnType<typeof SetNewPostTextAC>
    | ReturnType<typeof AddMessageAC>
    |ReturnType<typeof SetNewMessageTextAC>

//BLL:
const PostsData: Array<PostsDataType> = [
    {id: 1, message: "Hi dude", likesCount: 12},
    {id: 2, message: "nice photos!", likesCount: 11},
]
const DialogsData: Array<DialogsDataType> = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Victor"},
]
const MessagesData: Array<MessagesDataType> = [
    {id: 1, message: "Hello"},
    {id: 2, message: "How are u?"},
]

const store: StoreType = {
    _state: {
        dialogPage: {
            dialogs: DialogsData,
            messages: MessagesData,
            newMessageText: ""
        },
        profilePage: {
            posts: PostsData,
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

       /* this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);

        this._callSubscriber(this._state);*/

        if (action.type === "ADD-POST") {
            const newPost: PostsDataType = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            PostsData.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = '';
        } else if (action.type === "SET-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === "ADD-MESSAGE") {
            const newMessage: MessagesDataType = {
                id: 4,
                message: this._state.dialogPage.newMessageText,
            }
            MessagesData.push(newMessage);
            this._callSubscriber(this._state);
            this._state.dialogPage.newMessageText = '';
        } else if (action.type === "SET-NEW-MESSAGE-TEXT") {
            this._state.dialogPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        } else {
            return this._state;
        }
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