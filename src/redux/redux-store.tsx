import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

//types:
export type AppStateType = ReturnType<typeof rootReducer>
export type RootReduxStoreType = typeof store

//store:
export const rootReducer = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer
})

const store = createStore(rootReducer);

export {
    store
}