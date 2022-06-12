import {AppStateType} from "../redux/redux-store";

export const getDialogsSL = (state: AppStateType) => {
    return state.dialogPage
}