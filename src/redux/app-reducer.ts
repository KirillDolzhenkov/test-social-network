import React from "react";
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

//types:
type initialStateType = {
    initialised: boolean
}
type AppActionType = any//ReturnType<typeof initialisedSuccess>


//initialState:
const initialState: initialStateType = {
    initialised: false
}

//reducer:
const AppReducer = (state: initialStateType = initialState, action: AppActionType) => {
    switch (action.type) {
        case "INITIALISED_SUCCESS": {
            return {
                ...state,
                initialised: true
            }
        }
        default:
            return state;
    }
}

//action creators:
export const initialisedSuccess = () => {
    return {type: "SN/APP/INITIALISED_SUCCESS"}
}

//thunk creators:
export const initialiseApp = () => {
    return (dispatch: Dispatch<AppActionType>) => {
        let promise = dispatch(getAuthUserData());

        Promise
            .all([promise]) //Array - if we need more dispatches in future
            .then(()=>dispatch(initialisedSuccess()));
    }
}

export {
    AppReducer
}