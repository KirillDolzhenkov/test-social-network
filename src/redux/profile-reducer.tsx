import {ActionType, PostsDataType} from "./store";

//types:
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
    if (action.type === "ADD-POST") {
        const newPost: PostsDataType = {
            id: 4,
            message: state.newPostText,
            likesCount: 0
        }
        state.posts.push(newPost);
        state.newPostText = "";
        return state;
    } else if (action.type === "SET-NEW-POST-TEXT") {
        state.newPostText = action.newText;
        return state;
    } else {
        return state;
    }
}

export {
    profileReducer
}