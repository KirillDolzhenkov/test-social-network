import {ActionType} from "./redux-store";

//types:
type locationType = {
    country: string
    city: string
}
export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: locationType
}
export type UsersInitialStateType = {
    users: Array<UsersType>
}

//initialState:
const initialState: UsersInitialStateType = {
    users: [
        {id: 1, followed: false, name: "Victor", status: "blabla", location: { country: "Belarus", city:"Minsk"}},
        {id: 2,followed: false, name: "Dmitry", status: "blabla2", location: { country: "Belarus", city:"Mogilev"}},
        {id: 3,followed: false, name: "Valera", status: "blabla3", location: { country: "Belarus", city:"Brest"}},
    ]
}

//reducer:
const usersReducer = (state: UsersInitialStateType = initialState, action: ActionType) => {
    return state;
}

//action creators:
export const FollowAC = (id: number) => {
    return {type: "SN/USERS/FOLLOW", id} as const
}
export const UnFollowAC = (id: number) => {
    return {type: "SN/USERS/UNFOLLOW", id} as const
}
export const SetUsersAC = (users: UsersType) => {
    return{type: "SN/USERS/SET_USERS", users} as const
}

export {
    usersReducer
}