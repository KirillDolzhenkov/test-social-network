import React from "react";
import styles from "./Header.module.css";
import logo1 from "../../assets/images/logo_part_1.png"
import logo2 from "../../assets/images/logo_part_2.png"
import { NavLink } from "react-router-dom";

//types:
type HeaderPropsType = {}

//function component:
const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <div className={styles.header}>
            <img src={logo1}/>
            <img src={logo2}/>
            <div className={styles.loginBlock}>
                <NavLink to={"/login"}>login</NavLink>
            </div>
        </div>
    )
}

export {
    Header
}