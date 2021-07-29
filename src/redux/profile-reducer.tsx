import {ActionType} from "./redux-store";

//types:
export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileInitialStateType = {
    posts: Array<PostsDataType>
    newPostText: string
}

//initialState:
const initialState: ProfileInitialStateType = {
    posts: [
        {id: 1, message: "Hi dude", likesCount: 12},
        {id: 2, message: "nice photos!", likesCount: 11},
    ],
    newPostText: ""
}

//reducer:
const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionType) => {
    if (action.type === "SN/PROFILE/ADD_POST") {
        const stateCopy = {...state}
        const newPost: PostsDataType = {
            id: 4,
            message: state.newPostText,
            likesCount: 0
        };
        stateCopy.posts = [newPost,...state.posts];
        stateCopy.newPostText = "";
        return stateCopy;
    } else if (action.type === "SN/PROFILE/SET_NEW_POST_TEXT") {
        const stateCopy = {...state};
        stateCopy.newPostText = action.newText;
        return stateCopy;
    } else {
        return state;
    }
}

//action creators:
export const AddPostAC = (newPost: string) => {
    return {type: "SN/PROFILE/ADD_POST", newPost} as const
}
export const SetNewPostTextAC = (newText: string) => {
    return {type: "SN/PROFILE/SET_NEW_POST_TEXT", newText} as const
}

export {
    profileReducer
}