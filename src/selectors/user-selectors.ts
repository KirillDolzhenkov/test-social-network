import {AppStateType} from "../redux/redux-store";

export const requestUsers = (state: AppStateType) => {
    return state.usersPage
}
export const requestPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const requestTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const requestCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const requestIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const requestFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}