import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

import {DialogsActionType, dialogsReducer} from "./dialogs-reducer";
import {ProfileActionType, profileReducer} from "./profile-reducer";
import {UsersActionType, usersReducer} from "./users-reducer";
import {authReducer, authReducerAT} from "./auth-reducer";
import {appReducer, AppReducerActionType} from "./app-reducer";

//types:
export type AppStateType = ReturnType<typeof rootReducer>;
export type AppActionType = UsersActionType | ProfileActionType | DialogsActionType | authReducerAT | AppReducerActionType
export type AppThunkType = ThunkAction<void, AppStateType, unknown, authReducerAT>

//rootReducer & store:
export const rootReducer = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.__store__ = store

export {
    store
}