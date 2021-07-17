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
type storeType = any

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


const state: AppStateType = {
    dialogPage: {
        dialogs: DialogsData,
        messages: MessagesData,
        newMessageText: ""
    },
    profilePage: {
        posts: PostsData,
        newPostText: ""
    }
}

const store: storeType = {
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
    getState(){
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
}



//callBacks:
let reRenderEntireThree = (state: AppStateType) => {
}

export const addPost = () => {

    const newPost: PostsDataType = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    PostsData.push(newPost);
    reRenderEntireThree(state);
    state.profilePage.newPostText = '';
}
export const setNewPostText = (text: string) => {
    state.profilePage.newPostText = text;
    reRenderEntireThree(state);
}

export const addMessage = () => {

    const newMessage: MessagesDataType = {
        id: 4,
        message: state.dialogPage.newMessageText,
    }
    MessagesData.push(newMessage);
    reRenderEntireThree(state);
    state.dialogPage.newMessageText = '';
}
export const setNewMessageText = (text: string) => {
    state.dialogPage.newMessageText = text;
    reRenderEntireThree(state);
}

export const subscribe = (observer: any) => {
    reRenderEntireThree = observer;
}


export {
    state
}