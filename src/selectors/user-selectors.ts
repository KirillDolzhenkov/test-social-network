import {AppStateType} from "../redux/redux-store";

export const getUsersSL = (state: AppStateType) => {
    return state.usersPage
}
export const getPageSizeSL = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountSL = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageSL = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetchingSL = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgressSL = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}