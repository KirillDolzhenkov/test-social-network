import {AppStateType} from "../redux/redux-store";

export const getProfileSL = (state: AppStateType) => {
    return state.profilePage.profile
}
export const getStatusSL = (state: AppStateType) => {
    return  state.profilePage.status
}

export const getIsAuthSL = (state: AppStateType) => {
    return state.auth.isAuth
}

export const getAuthUserIdSL = (state: AppStateType) => {
    return state.auth.id
}
