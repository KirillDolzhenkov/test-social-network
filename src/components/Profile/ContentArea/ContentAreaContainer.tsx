import {AppStateType} from "../../../redux/redux-store";
import {ContentArea} from "./ContentArea";
import {addPost, ProfileInitialStateType, setNewPostText} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

//types:
type mapStateToPropsType = {
    profilePage: ProfileInitialStateType
}
type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    setNewPostText: (newText: string) => void
}

//container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

//HOC:
const ContentAreaContainer = connect(mapStateToProps, {addPost, setNewPostText})(ContentArea);

export {
    ContentAreaContainer
}