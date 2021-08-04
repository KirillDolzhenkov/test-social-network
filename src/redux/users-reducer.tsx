import {ActionType} from "./redux-store";

//types:
type locationType = {
    country: string
    city: string
}
export type UsersType = {
    id: number
    followed: boolean
    photo: string
    name: string
    status: string
    location: locationType
}
export type UsersInitialStateType = {
    users: Array<UsersType>
}

//initialState:
const initialState: UsersInitialStateType = {
    users: []
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

export {
    usersReducer
}