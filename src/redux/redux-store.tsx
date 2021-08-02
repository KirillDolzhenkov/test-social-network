import {combineReducers, createStore} from "redux";
import {AddMessageAC, dialogsReducer, SetNewMessageTextAC} from "./dialogs-reducer";
import {AddPostAC, profileReducer, SetNewPostTextAC} from "./profile-reducer";
import {FollowAC, SetUsersAC, UnFollowAC, usersReducer} from "./users-reducer";

//types:
export type AppStateType = ReturnType<typeof rootReducer>
export type RootReduxStoreType = typeof store
export type ActionType = ReturnType<typeof AddPostAC>
    | ReturnType<typeof SetNewPostTextAC>
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof SetNewMessageTextAC>
    | ReturnType<typeof FollowAC>
    | ReturnType<typeof UnFollowAC>
    | ReturnType<typeof SetUsersAC>

//store:
export const rootReducer = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
});

const store = createStore(rootReducer);

export {
    store
}