import {combineReducers, createStore} from "redux";
import {AddMessageAC, dialogsReducer, SetNewMessageTextAC} from "./dialogs-reducer";
import {AddLikeAC, AddPostAC, profileReducer, RemoveLikeAC, SetNewPostTextAC, SetProfileAC} from "./profile-reducer";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow,
    usersReducer
} from "./users-reducer";

//types:
export type AppStateType = ReturnType<typeof rootReducer>;
export type RootReduxStoreType = typeof store;
export type ActionType = ReturnType<typeof AddPostAC>
    | ReturnType<typeof SetNewPostTextAC>
    | ReturnType<typeof AddLikeAC>
    | ReturnType<typeof RemoveLikeAC>
    | ReturnType<typeof SetProfileAC>
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof SetNewMessageTextAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>

//store & rootReducer:
export const rootReducer = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
});

const store = createStore(rootReducer);

export {
    store
}