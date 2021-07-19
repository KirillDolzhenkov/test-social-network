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
    addPost: () => void
    setNewPostText: (text: string) => void
    addMessage: () => void
    setNewMessageText: (text: string) => void
    dispatch: (action: ActionType) => any
}


type AddPostAT = {
    type: "ADD-POST"
    newPost: string
}
type SetNewPostTextAT = {
    type: "SET-NEW-POST-TEXT"
    newText: string
}
type AddMessageAT = {
    type: "ADD-MESSAGE"
    newMessage: string
}
type SetNewMessageTextAT = {
    type: "SET-NEW-MESSAGE-TEXT"
    newText: string
}

export type ActionType = AddPostAT
    | SetNewPostTextAT
    | AddMessageAT
    | SetNewMessageTextAT

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
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    addPost() {

        const newPost: PostsDataType = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        PostsData.push(newPost);
        this._callSubscriber(this._state);
        this._state.profilePage.newPostText = '';
    },
    setNewPostText(text: string) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
    addMessage() {
        const newMessage: MessagesDataType = {
            id: 4,
            message: this._state.dialogPage.newMessageText,
        }
        MessagesData.push(newMessage);
        this._callSubscriber(this._state);
        this._state.dialogPage.newMessageText = '';
    },
    setNewMessageText(text: string) {
        this._state.dialogPage.newMessageText = text;
        this._callSubscriber(this._state);
    },


    dispatch(action: ActionType) {

        if (action.type === "ADD-POST") {
            const newPost: PostsDataType = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            PostsData.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = '';
        }
        if (action.type === "SET-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        if (action.type === "ADD-MESSAGE") {
            const newMessage: MessagesDataType = {
                id: 4,
                message: this._state.dialogPage.newMessageText,
            }
            MessagesData.push(newMessage);
            this._callSubscriber(this._state);
            this._state.dialogPage.newMessageText = '';
        }
        if (action.type === "SET-NEW-MESSAGE-TEXT") {
            this._state.dialogPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
        else {
            return this._state // !!!!!
        }
    }
}




export {
    store
}