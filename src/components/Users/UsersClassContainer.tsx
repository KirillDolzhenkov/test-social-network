import React from "react";
import {
    FollowAC,
    SetCurrentPageAC, SetTotalUsersCountAC,
    SetUsersAC,
    UnFollowAC,
    UsersInitialStateType,
    UsersType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Preloader} from "../common/Preloader/Preloader";

//types:
type UsersPropsType = {
    usersPage: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

    //callBacksTypes (mapDispatchToPropsType):
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
type mapStateToPropsType = {
    usersPage: UsersInitialStateType
    pageSize: number //rudiment???
    totalUsersCount: number //rudiment???
    currentPage: number //rudiment???
    isFetching: boolean
}
type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

//class container component:
class UsersClassContainer extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    //onPageChanged Fn for pagination:
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    usersPage={this.props.usersPage}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    setUsers={this.props.setUsers}
                    setCurrentPage={this.props.setCurrentPage}
                    setTotalUsersCount={this.props.setTotalUsersCount}
                    onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}

//container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize, //rudiment???
        totalUsersCount: state.usersPage.totalUsersCount, //rudiment???
        currentPage: state.usersPage.currentPage, //rudiment???
        isFetching: state.usersPage.isFetching
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(SetCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(SetTotalUsersCountAC(totalCount));
        }
    }
}

//HOC:
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer);


export {
    UsersContainer
}