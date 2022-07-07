import React from "react";

import {UsersInitialStateType, UsersType} from "../../redux/users-reducer";
import style from "./Users.module.css";
import {Pagination} from "../common/Pagination/Paginator";
import {User} from "./User";


//types:
type UsersPropsType = {
    usersPage: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: any[]
    setUsers: (users: Array<UsersType>) => void //need to delete and remove from props
    setCurrentPage: (pageNumber: number) => void //need to delete and remove from props
    setTotalUsersCount: (totalCount: number) => void //need to delete and remove from props
    onPageChanged: (p: number) => void

    unFollowThunkCreator: (userId: number) => void //need rename to unFollow
    followThunkCreator: (userId: number) => void //need rename to follow
}

//functional component:
const Users: React.FC<UsersPropsType> = (props) => {

    const {
        usersPage,
        pageSize,
        totalUsersCount,
        currentPage,
        followingInProgress,
        setUsers, //need to delete
        setCurrentPage, //need to delete
        setTotalUsersCount, //need to delete
        onPageChanged,
        unFollowThunkCreator,
        followThunkCreator,
    } = props;

    return <div className={style.items}>
        {usersPage.users.map(u => <User
                key={u.id}
                user={u}
                followingInProgress={followingInProgress}
                unFollowThunkCreator={unFollowThunkCreator}
                followThunkCreator={followThunkCreator}
            />
        )}
        <Pagination
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount}
            portionSize={6}//testValue
        />
    </div>
}

export {
    Users
}
