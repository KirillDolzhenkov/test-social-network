import React from "react";
import {UsersInitialStateType, UsersType} from "../../redux/users-reducer";

//types:
type UsersPropsType = {
    usersPage: UsersInitialStateType
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: UsersType) => void
}

//FC:
const Users: React.FC<UsersPropsType> = (props) => {

    const state = props.usersPage

    return (
        <div>
            Users page content
            {
                state.users.map(u=><div>
                    <div>
                        {u.name}
                    </div>
                    <div>
                       <button>{u.followed}</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export {
    Users
}