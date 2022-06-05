import {AppStateType} from "../redux/redux-store";

export const requestProfile = (state: AppStateType) => {
    return state.profilePage.profile
}
export const requestStatus = (state: AppStateType) => {
    return  state.profilePage.status
}

export const requestIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}

export const requestAuthUserId = (state: AppStateType) => {
    return state.usersPage.currentPage
}
