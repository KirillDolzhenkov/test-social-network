import {combineReducers, createStore} from "redux";
import {addMessage, dialogsReducer, setNewMessageText} from "./dialogs-reducer";
import {addLike, addPost, profileReducer, removeLike, setNewPostText, setProfile} from "./profile-reducer";
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
export type ActionType = ReturnType<typeof addPost>
    | ReturnType<typeof setNewPostText>
    | ReturnType<typeof addLike>
    | ReturnType<typeof removeLike>
    | ReturnType<typeof setProfile>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof setNewMessageText>
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