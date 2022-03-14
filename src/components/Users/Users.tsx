import React from "react";
import {NavLink} from "react-router-dom";

import {UsersInitialStateType, UsersType} from "../../redux/users-reducer";
import defaultSmallUserPhoto from "../../assets/images/default_user_photo.png"
import style from "./Users.module.css";


//types:
type UsersPropsType = {
    usersPage: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: any[]
    setUsers: (users: Array<UsersType>) => void //need to delete
    setCurrentPage: (pageNumber: number) => void //need to delete
    setTotalUsersCount: (totalCount: number) => void //need to delete
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

    //pages for pagination:
    const pagesCount = Math.ceil(totalUsersCount / pageSize) //.ceil rounds a number up to the next largest integer
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={style.items}>
            {
                usersPage.users.map(u => <div key={u.id}>
                    <div className={style.profile}>

                        <NavLink to={'/profile/' + u.id}>
                            <img src={
                                u.photos.small !== null
                                    ? u.photos.small
                                    : defaultSmallUserPhoto //defaultAsset
                            } alt="smallUserPhoto"/>
                        </NavLink>

                        <div className={style.info}>
                            <NavLink to={'/profile/' + u.id}>
                                <div className={style.name}>{u.name}</div>
                            </NavLink>
                        </div>
                    </div>

                    <div className={style.buttonsArea}>
                        <div>
                            {
                                u.followed
                                    ? <button
                                        disabled={followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            unFollowThunkCreator(u.id);
                                        }}
                                    >unfollow</button>
                                    : <button
                                        disabled={followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            followThunkCreator(u.id);
                                        }}
                                    >follow</button>
                            }
                        </div>
                        <div>
                            <NavLink to={'/dialogs/' + u.id}> {/*<- NavLink!!!!!!*/}
                                <button>{"Write message"}</button>
                            </NavLink>
                        </div>
                    </div>
                    <hr/>
                </div>)
            }
            <div>
                {
                    pages.map(p => <span  //pagination
                        className={
                            p === currentPage
                                ? style.selectedPage
                                : ''
                        }
                        onClick={() => onPageChanged(p)}
                    >{p}</span>)
                }
            </div>
        </div>
    )
}

export {
    Users
}