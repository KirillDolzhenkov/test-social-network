import {combineReducers, createStore} from "redux";
import {AddMessageAC, dialogsReducer, SetNewMessageTextAC} from "./dialogs-reducer";
import {AddPostAC, profileReducer, SetNewPostTextAC} from "./profile-reducer";

//types:
export type AppStateType = ReturnType<typeof rootReducer>
export type RootReduxStoreType = typeof store
export type ActionType = ReturnType<typeof AddPostAC>
    | ReturnType<typeof SetNewPostTextAC>
    | ReturnType<typeof AddMessageAC>
    |ReturnType<typeof SetNewMessageTextAC>

//store:
export const rootReducer = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer
})

const store = createStore(rootReducer);

export {
    store
}