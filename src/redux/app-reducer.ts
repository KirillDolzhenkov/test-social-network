import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";
import {AppActionType, AppThunk} from "./redux-store";

//types:
type initialStateType = {
    initialized: boolean
}
export type AppReducerActionType = any//ReturnType<typeof initialisedSuccess> //NEED TO FIX!!!


//initialState:
const initialState: initialStateType = {
    initialized: false
}

//reducer:
const appReducer = (state: initialStateType = initialState, action: AppActionType) => {
    switch (action.type) {
        case "SN/APP/INITIALISED_SUCCESS": {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

//action creators:
export const initializedSuccess = () => {
    return {type: "SN/APP/INITIALISED_SUCCESS"} as const
}

//thunk creators:
export const initializeApp = (): AppThunk => {
    return (dispatch: Dispatch<AppActionType>) => {
        let promise = dispatch(getAuthUserData());
        debugger
        Promise
            .all([promise]) //Array - if we need more dispatches in future
            .then(dispatch(initializedSuccess));
    }
}

export {
    appReducer
}