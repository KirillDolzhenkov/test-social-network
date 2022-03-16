import {Dispatch} from "redux";

import {authAPI} from "../api/api";
import {AppActionType} from "./redux-store";

//types:
export type authReducerAT = ReturnType<typeof setAuthUserData>| ReturnType<typeof loginUser>
export type AuthInitialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}
export type LoginPropertiesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}

//initialState:
const initialState: AuthInitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


//reducer:
const authReducer = (state: AuthInitialStateType = initialState, action: AppActionType): AuthInitialStateType => {
    switch (action.type) {
        case "SN/AUTH/SET_AUTH_USER_DATA": {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case "SN/AUTH/LOGIN_USER":{
            return state; //need to create
        }
        default:
            return state;
    }
}

//action creators:
export const setAuthUserData = (data: AuthInitialStateType) => {
    return {type: "SN/AUTH/SET_AUTH_USER_DATA", data} as const //data = id, email, login
}
const loginUser = (properties: LoginPropertiesType) => {
    return {type: "SN/AUTH/LOGIN_USER", properties} as const //properties = email: string, password, rememberMe, captcha
}

//thunk creators:
export const getAuthUserData = () => {
    return (dispatch: Dispatch<authReducerAT>) => {
        authAPI
            .me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let data = response.data.data;
                    dispatch(setAuthUserData(data));
                }
            });
    }
}

export const loginUserThunk = (properties: LoginPropertiesType) => {
    return (dispatch: Dispatch<authReducerAT>) => {
        authAPI
            .login(properties)
            .then(response => {
                if (response.data.resultCode === 0) {
                    let properties = response.data.data;
                    dispatch(loginUser(properties));
                }
            });
    }
}

export {
    authReducer
}