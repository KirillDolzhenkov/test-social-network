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