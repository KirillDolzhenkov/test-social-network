import React from "react";
import {UsersInitialStateType, UsersType} from "../../redux/users-reducer";
import defaultSmallUserPhoto from "../../assets/images/defaultSmallUserPhoto.png"
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

//types:
type UsersPropsType = {
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
                        <NavLink to={'/profile/' + u.id}>
                        <img src={
                            u.photos.small !== null
                                ? u.photos.small
                                : defaultSmallUserPhoto //defaultAsset
                        }/>
                        </NavLink>
                    </div>
                    <div><b>{u.name}</b></div>
                    <div style={{textDecoration: "underline", color: "blue"}}>{"Write message"}</div>{/*//need to create own style*/}
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {withCredentials: true,
                                            headers: {
                                                "API-KEY": "2f53ebc7-6e0c-44af-b6eb-a755cbe3639f"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0){
                                                props.unFollow(u.id);
                                            }
                                        });
                                }}>unfollow</button>

                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {withCredentials: true,
                                            headers: {
                                                "API-KEY": "2f53ebc7-6e0c-44af-b6eb-a755cbe3639f"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0){
                                                props.follow(u.id);
                                            }
                                        });
                                }}>follow</button>
                        }
                    </div>
                    {/*description of location:*/}
                    <div>
                        {"country:"}{u.location?.country ? u.location.country : " - "}{/*missed value*/}
                    </div>
                    <div>
                        {"city:"}{u.location?.city ? u.location.city : " - "}{/*missed value*/}
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