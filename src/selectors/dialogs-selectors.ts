import {AppStateType} from "../redux/redux-store";

export const requestDialogs = (state: AppStateType) => {
    return state.dialogPage
}