import {AppStateType} from "../redux/redux-store";

export const requestInitialized = (state: AppStateType) => {
    return state.app.initialized
}