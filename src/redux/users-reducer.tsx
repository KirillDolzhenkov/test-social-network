import {ActionType} from "./redux-store";

//types:
type LocationType = {
    country: string
    city: string
}
type PhotosType = {
    small: string
    large: string
}
export type UsersType = {
    id: number
    followed: boolean
    photos: PhotosType
    name: string
    status: string
    location: LocationType
}
export type UsersInitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

//initialState:
const initialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 2
}

//reducer:
const usersReducer = (state: UsersInitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SN/USERS/FOLLOW": {
            let stateCopy = {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
            return stateCopy;
        }
        case "SN/USERS/UNFOLLOW": {
            let stateCopy = {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
            return stateCopy;
        }
        case "SN/USERS/SET_USERS": {
            return {...state, users: [ ...action.users]} //need to return {...state, users: [...state.users, ...action.users]}
        }
        case "SN/USERS/SET_CURRENT_PAGE": {
            return {...state, currentPage: action.p}
        }
        default: {
            return state;
        }
    }
}

//action creators:
export const FollowAC = (id: number) => {
    return {type: "SN/USERS/FOLLOW", id} as const
}
export const UnFollowAC = (id: number) => {
    return {type: "SN/USERS/UNFOLLOW", id} as const
}
export const SetUsersAC = (users: Array<UsersType>) => {
    return {type: "SN/USERS/SET_USERS", users} as const
}
export const SetCurrentPageAC = (p: number) => {
    return{type: "SN/USERS/SET_CURRENT_PAGE", p} as const
}

export {
    usersReducer
}