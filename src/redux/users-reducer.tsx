import {ActionType} from "./redux-store";

//types:


//initialState:
const initialState: any = {

}

//reducer:
const profileReducer = (state: any = initialState, action: ActionType) => {
    return state;
}

//action creators:
export const FollowAC = (id: number) => {
    return {type: "SN/USERS/FOLLOW", id} as const
}
export const UnFollowAC = (id: number) => {
    return {type: "SN/USERS/UNFOLLOW", id} as const
}
export const SetUsersAC = () => {
    return{type: "SN/USERS/SET_USERS"} as const
}

export {
    profileReducer
}