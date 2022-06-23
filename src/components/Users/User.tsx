import React from "react";
import {NavLink} from "react-router-dom";

import defaultSmallUserPhoto from "../../assets/images/default_user_photo.png"
import style from "./Users.module.css";

//types:
type UsersPropsType = {
    user: any
    followingInProgress: any[]
    unFollowThunkCreator: (userId: number) => void //need rename to unFollow
    followThunkCreator: (userId: number) => void //need rename to follow
}

//functional component:
const User: React.FC<UsersPropsType> = (props) => {

    const {
        user,
        followingInProgress,
        unFollowThunkCreator,
        followThunkCreator,
    } = props;

    return <div key={user.id}>
            <div className={style.profile}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={
                        user.photos.small !== null
                            ? user.photos.small
                            : defaultSmallUserPhoto //defaultAsset
                    } alt="smallUserPhoto"/>
                </NavLink>
                <div className={style.info}>
                    <NavLink to={'/profile/' + user.id}>
                        <div className={style.name}>{user.name}</div>
                    </NavLink>
                </div>
            </div>
            <div className={style.buttonsArea}>
                <div>
                    {
                        user.followed
                            ? <button
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unFollowThunkCreator(user.id);
                                }}
                            >unfollow</button>
                            : <button
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    followThunkCreator(user.id);
                                }}
                            >follow</button>
                    }
                </div>
                <div>
                    {/*(in progress) NavLink to dialogs with user we clicked:*/}
                    <NavLink to={'/dialogs/' + user.id}>
                        <button>{"Write message"}</button>
                    </NavLink>
                </div>
            </div>
            <hr/>
        </div>
}

export {
    User
}