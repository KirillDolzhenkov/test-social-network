import React from "react";
import {NavLink} from "react-router-dom";

import {UsersInitialStateType, UsersType} from "../../redux/users-reducer";
import defaultSmallUserPhoto from "../../assets/images/defaultSmallUserPhoto.png"
import style from "./Users.module.css";


//types:
type UsersPropsType = {
    usersPage: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: any[]

    //callBacksTypes (mapDispatchToPropsType):
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (p: number) => void
    setFollowingProgress: (followingProgress: boolean, id: number) => void

    //thunkTypes:
    unFollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
}

//functional component:
const Users: React.FC<UsersPropsType> = (props) => {

    const state = props.usersPage; //state!!!

    //pages for pagination:
    const pagesCount = Math.ceil(state.totalUsersCount / state.pageSize) //.ceil rounds a number up to the next largest integer
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (

        <div className={style.items}>
            <div>
                { //pagination:
                    pages.map(p => <span
                        className={p === state.currentPage
                            ? style.selectedPage
                            : ''
                        }
                        onClick={() => props.onPageChanged(p)} //callBack?
                    >{p}</span>)
                }

            </div>

            {
                state.users.map(u => <div key={u.id}>
                    <hr/>
                    <div className={style.profile}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={
                                u.photos.small !== null
                                    ? u.photos.small
                                    : defaultSmallUserPhoto //defaultAsset
                            }/>
                        </NavLink>
                        <div className={style.info}>
                            <NavLink to={'/profile/' + u.id}>
                                <b>{u.name}</b>
                            </NavLink>
                        </div>
                    </div>


                    <div className={style.buttonsArea}>
                        <div>
                            {
                                u.followed
                                    ? <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            props.unFollowThunkCreator(u.id);
                                        }}
                                    >-unfollow</button>
                                    : <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            props.followThunkCreator(u.id);
                                        }}
                                    >+follow</button>
                            }
                        </div>
                        <div>
                            <NavLink to={'/dialogs/' + u.id}> {/*<- NavLink!!!!!!*/}
                                <button>{"Write message"}</button>
                            </NavLink>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export {
    Users
}