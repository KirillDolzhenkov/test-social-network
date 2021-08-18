import React from "react";
import {UsersInitialStateType, UsersType} from "../../redux/users-reducer";
import axios from "axios";
import defaultSmallUserPhoto from "../../ assets/images/defaultSmallUserPhoto.png"
import styles from "./Users.module.css";

//types:
type UsersPropsType = {
    usersPage: UsersInitialStateType
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

//class component:
class UsersCopy extends React.Component<UsersPropsType, any>{
    constructor(props:UsersPropsType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users/").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        const state = this.props.usersPage;
        return (
            <div className={styles.items}>
                Users:
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
                        <div>{u.name}</div>
                        <div>{u.location?.country}</div> {/*missed value*/}
                        <div>{u.location?.city}</div> {/*missed value*/}
                        <div>
                            {
                                u.followed
                                    ?
                                    <button onClick={() => {
                                        this.props.unFollow(u.id);
                                    }}>unfollow</button>
                                    :
                                    <button onClick={() => {
                                        this.props.follow(u.id);
                                    }}>follow</button>
                            }
                        </div>
                        <hr/>
                    </div>)
                }
            </div>
        )
    }
}

export {
    UsersCopy
}