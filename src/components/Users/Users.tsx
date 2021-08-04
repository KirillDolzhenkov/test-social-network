import React from "react";
import {UsersInitialStateType, UsersType} from "../../redux/users-reducer";

//types:
type UsersPropsType = {
    usersPage: UsersInitialStateType
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

//FC:
const Users: React.FC<UsersPropsType> = (props) => {

    const state = props.usersPage;

    if(state.users.length === 0){
        props.setUsers([
            {id: 1, followed: false, photo: "PhotoURL", name: "Victor", status: "blabla", location: { country: "Belarus", city:"Minsk"}},
            {id: 2, followed: false, photo: "PhotoURL",name: "Dmitry", status: "blabla2", location: { country: "Belarus", city:"Mogilev"}},
            {id: 3, followed: false, photo: "PhotoURL",name: "Valera", status: "blabla3", location: { country: "Belarus", city:"Brest"}},
        ])
    }

    return (
        <div>
            Users page content
            <hr/>
            {
                state.users.map(u => <div> key={u.id}
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.followed
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
                    <hr/>
                </div>)
            }
        </div>
    )
}

export {
    Users
}