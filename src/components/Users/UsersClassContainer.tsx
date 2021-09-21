import React from "react";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount, setUsers, unFollow,
    UsersInitialStateType,
    UsersType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Preloader} from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";

//types:
type UsersContainerPropsType = {}
type mapStateToPropsType = {
    usersPage: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}
type UsersClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

//class container component:
class UsersClassContainer extends React.Component<UsersClassContainerPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true);

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });

    }

    //onPageChanged Fn for pagination:
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);

        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <Users
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
                }
            </>
        )
    }

}

//container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


//HOC:
const UsersContainer = connect<mapStateToPropsType, mapDispatchToPropsType, UsersContainerPropsType, AppStateType>(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setIsFetching,
    }
)(UsersClassContainer);


export {
    UsersContainer
}