import {AppStateType} from "../redux/redux-store";

export const getInitializedSL = (state: AppStateType) => {
    return state.app.initialized
}