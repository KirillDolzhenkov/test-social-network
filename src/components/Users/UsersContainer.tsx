import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {FollowAC, SetUsersAC, UnFollowAC, UsersInitialStateType, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {UsersClassComponent} from "./UsersClassComponent";

//types:
type mapStateToPropsType = {
    usersPage: UsersInitialStateType
}
type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

//container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
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