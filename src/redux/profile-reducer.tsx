import {ActionType, AppStateType, PostsDataType} from "./store";

const profileReducer = (state: AppStateType, action: ActionType) => {
    if (action.type === "ADD-POST") {
        const newPost: PostsDataType = {
            id: 4,
            message: state.profilePage.newPostText,
            likesCount: 0
        }
        state.profilePage.posts.push(newPost);

        state.profilePage.newPostText = '';
    } else if (action.type === "SET-NEW-POST-TEXT") {
        state.profilePage.newPostText = action.newText;

    } else {
        return state;
    }
}

export {
    profileReducer
}