//types:

type authReducerAT = ReturnType<typeof setAuthUserData>
export type AuthInitialStateType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    /* isAuth: boolean*/
}

//initialState:
const initialState: AuthInitialStateType = {
    userId: null,
    email: null,
    login: null,
    /* isAuth: false*/
}

//reducer:
const authReducer = (state: AuthInitialStateType = initialState, action: authReducerAT) => {
    switch (action.type) {
        case "SN/SET_AUTH_USER_DATA": {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

//action creators:
/*export const setAuthUserData = (data: authInitialStateType) => {
    return {type: "SN/SET_AUTH_USER_DATA", data} as const
}*/
export const setAuthUserData = (userId: null | number, email: null | number, login: null | number) => {
    return {type: "SN/SET_AUTH_USER_DATA", data: {userId, email, login}} as const
}

export {
    authReducer
}