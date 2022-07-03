import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Navbar.module.css";
import {PATH} from "../../App";

//types:
type NavbarPropsType = {}

//functional component:
const Navbar: React.FC<NavbarPropsType> = (props) => {
    return (
        <div className={style.navbar}>
            <div className={style.item}>
                <NavLink to={PATH.PROFILE} activeClassName={style.active}>My profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={PATH.NEWS} activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={PATH.DIALOGS} activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={PATH.USERS} activeClassName={style.active}>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={PATH.MUSIC} activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={PATH.SETTINGS} activeClassName={style.active}>Settings</NavLink>
            </div>
        </div>
    )
}

export {
    Navbar
}