//types:

type authReducerAT = ReturnType<typeof setAuthUserData>
type authInitialStateType = {
    userId: any //number?
    email: any //string?
    login: any //string?
    isAuth: boolean
}

//initialState:
const initialState: authInitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

//reducer:
const authReducer = (state: authInitialStateType = initialState, action: authReducerAT) => {
    switch (action.type) {
        case "SN/SET_AUTH_USER_DATA":{
            return state;
        }
        default: {
            return {
                ...state,
                ...action.data
            }
        }
    }
}

//action creators:
export const setAuthUserData = (data: authInitialStateType) => {
    return {type: "SN/SET_AUTH_USER_DATA", data} as const
}

export {
    authReducer
}