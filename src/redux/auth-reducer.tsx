//types:

type authReducerAT = ReturnType<typeof firstAC>

type authInitialStateType = {
    userId: any
    email: any
    login: any
}

//initialState:
const initialState: authInitialStateType = {
    userId: null,
    email: null,
    login: null,
}

//reducer:
const authReducer = (state: authInitialStateType = initialState, action: authReducerAT) => {
    switch (action.type) {
        case "SN/SET_USER_DATA":{
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
const firstAC = (data: authInitialStateType) => {
    return {type: "SN/SET_USER_DATA", data} as const
}

export {
    authReducer
}