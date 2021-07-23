import {combineReducers, createStore} from "redux";
import {DialogsInitialStateType, dialogsReducer} from "./dialogs-reducer";
import {ProfileInitialStateType, profileReducer} from "./profile-reducer";

//types:
export type AppStateType = ReturnType<typeof rootReducer>
export type RootReduxStoreType = typeof store

//store:
export const rootReducer = combineReducers({
    dialogsReducer: dialogsReducer,
    profileReducer: profileReducer
})

const store = createStore(rootReducer);

export {
    store
}