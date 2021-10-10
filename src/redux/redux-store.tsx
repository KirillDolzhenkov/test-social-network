import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import {DialogsActionType, dialogsReducer} from "redux/dialogs-reducer";
import {ProfileActionType, profileReducer} from "redux/profile-reducer";
import {UsersActionType, usersReducer} from "redux/users-reducer";
import {authReducer, authReducerAT} from "redux/auth-reducer";

//types:
export type AppStateType = ReturnType<typeof rootReducer>;
export type AppActionType = UsersActionType | ProfileActionType | DialogsActionType | authReducerAT


//store & rootReducer:
export const rootReducer = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.__store__ = store

export {
    store
}