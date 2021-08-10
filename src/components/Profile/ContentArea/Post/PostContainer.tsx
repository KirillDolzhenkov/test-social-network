import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {AddLikeAC, ProfileInitialStateType, RemoveLikeAC} from "../../../../redux/profile-reducer";
import {Post} from "./Post";

//types:
type mapStateToPropsType = {
    profilePage: ProfileInitialStateType
}
type mapDispatchToPropsType = {
    addLike: (id: number, isLiked: boolean) => void
    removeLike: (id: number, isLiked: boolean) => void
}

//CC:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addLike: (id: number, isLiked: boolean)=>{
            dispatch(AddLikeAC(id, isLiked));
        },
        removeLike: (id: number, isLiked: boolean)=> {
            dispatch(RemoveLikeAC(id, isLiked));
        }
    }
}

//HOC:
const PostContainer = connect(mapStateToProps,mapDispatchToProps)(Post);

export {
    PostContainer
}