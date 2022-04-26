import {Dispatch} from "redux";

import {authAPI} from "../api/api";
import {AppActionType, AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";

//types:
export type authReducerAT = ReturnType<typeof setAuthUserData>

export type AuthInitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

//initialState:
const initialState: AuthInitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

//reducer:
const authReducer = (state: AuthInitialStateType = initialState, action: AppActionType): AuthInitialStateType => {
    switch (action.type) {
        case "SN/AUTH/SET_AUTH_USER_DATA": {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}

//action creators:
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: "SN/AUTH/SET_AUTH_USER_DATA", payload: {id, email, login, isAuth} } as const
}

//thunk creators:
export const getAuthUserData = () => {
    return (dispatch: Dispatch<authReducerAT>) => {
        authAPI
            .me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data; //payload = id, email, login, isAuth
                    dispatch(setAuthUserData(id, email, login,  true));
                }
            });
    }
}

export const loginUserThunk = (email: string, password: string, rememberMe: boolean) : ThunkAction<void, AppStateType, unknown, authReducerAT> => {
    return (dispatch) => { // need to create AppThunk in store
        authAPI
            .login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else {
                    let messages = response.data.messages.length > 0 ? response.data.messages : "Some error"
                    //@ts-ignore
                    dispatch(stopSubmit("login",{_error: messages})); //TYPES !!!
                }
            });
    }
}

export const logoutUserThunk = (): ThunkAction<void, AppStateType, unknown, authReducerAT> => {
    return (dispatch) => { // need to create AppThunk in store
        authAPI
            .logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
}

export {
    authReducer
}