import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {FollowAC, SetUsersAC, UnFollowAC, UsersInitialStateType, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {UsersClassComponent} from "./UsersClassComponent";

//types:
type mapStateToPropsType = {
    usersPage: UsersInitialStateType
    pageSize: number //rudiment???
    totalUsersCount: number //rudiment???
    currentPage: number //rudiment???
}
type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

//container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize, //rudiment???
        totalUsersCount: state.usersPage.totalUsersCount, //rudiment???
        currentPage: state.usersPage.currentPage //rudiment???
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {

    return {
        follow: (id: number) => {
            dispatch(FollowAC(id));
        },
        unFollow: (id: number) => {
            dispatch(UnFollowAC(id));
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(SetUsersAC(users));
        }
    }
}

//HOC:
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent);

export {
    UsersContainer
}