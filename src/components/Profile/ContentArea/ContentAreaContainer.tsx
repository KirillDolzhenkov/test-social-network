import {AppStateType} from "../../../redux/redux-store";
import {ContentArea} from "./ContentArea";
import {AddPostAC, ProfileInitialStateType, SetNewPostTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";

//types:
type mapStateToPropsType = {
    profilePage: ProfileInitialStateType
}
type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (newText: string) => void
}

//CC:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(AddPostAC(newPostText));
        },
        updateNewPostText: (newText: string) => {
            dispatch(SetNewPostTextAC(newText));
        }

    }
}

//HOC:
const ContentAreaContainer = connect(mapStateToProps, mapDispatchToProps)(ContentArea);

export {
    ContentAreaContainer
}