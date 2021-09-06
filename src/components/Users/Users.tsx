import React from "react";
import {UsersInitialStateType, UsersType} from "../../redux/users-reducer";
import defaultSmallUserPhoto from "../../ assets/images/defaultSmallUserPhoto.png"
import styles from "./Users.module.css";

//types:
export type UsersPropsType = { //duplicate UsersPropsType!!!
    usersPage: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number

    //callBacksTypes (mapDispatchToPropsType):
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (p: number) => void
}

//functional component:
const Users: React.FC<UsersPropsType> = (props) => {

    const state = props.usersPage; //state!!!

    //pages for pagination:
    const pagesCount = Math.ceil(state.totalUsersCount / state.pageSize) //.ceil rounds a number up to the next largest integer
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div className={styles.items}>
            Users:

            <div>
                { //paginator:
                    pages.map(p => <span
                        className={p === state.currentPage
                            ? styles.selectedPage
                            : ''
                        }
                        onClick={() => props.onPageChanged(p)} //callBack?
                    >{p}</span>)
                }
            </div>

            <hr/>
            {
                state.users.map(u => <div key={u.id}>
                    <div>
                        <img src={
                            u.photos.small !== null
                                ? u.photos.small
                                : defaultSmallUserPhoto //defaultAsset
                        }/>
                    </div>
                    <div><b>{u.name}</b></div>
                    <div style={{textDecoration: "underline", color: "blue"}}>{"Write message"}</div>{/*//need to fix*/}
                    <div>
                        {
                            u.followed
                                ?
                                <button onClick={() => {
                                    props.unFollow(u.id);
                                }}>unfollow</button>
                                :
                                <button onClick={() => {
                                    props.follow(u.id);
                                }}>follow</button>
                        }
                    </div>

                    {/*description of location:*/}
                    <div>{"country:"}
                        {
                            u.location?.country //missed value
                                ? u.location.country
                                : " - "
                        }
                    </div>
                    <div>{"city:"}
                        {
                            u.location?.city //missed value
                                ? u.location.city
                                : " - "
                        }
                    </div>

                    <hr/>
                </div>)
            }
        </div>
    )
}

export {
    Users
}