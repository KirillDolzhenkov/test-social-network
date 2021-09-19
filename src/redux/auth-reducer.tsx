//types:

type authReducerAT = ReturnType<typeof setAuthUserData>
export type AuthInitialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
     isAuth: boolean
}

//initialState:
const initialState: AuthInitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

//reducer:
const authReducer = (state: AuthInitialStateType = initialState, action: authReducerAT): AuthInitialStateType => {
    switch (action.type) {
        case "SN/SET_AUTH_USER_DATA": {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

//action creators:
export const setAuthUserData = (data: AuthInitialStateType) => {
    return {type: "SN/SET_AUTH_USER_DATA", data} as const
}
/*export const setAuthUserData = (userId: null | number, email: null | number, login: null | number, isAuth: boolean) => {
    return {type: "SN/SET_AUTH_USER_DATA", data: {userId, email, login, isAuth}} as const
}*/

export {
    authReducer
}