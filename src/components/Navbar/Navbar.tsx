import React from "react";
import styles from "./Navbar.module.css";

type NavbarPropsType = {}

const Navbar: React.FC<NavbarPropsType> = (props) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.item}>
                <a>Profile</a>
            </div>
            <div className={styles.item}>
                <a>Messages</a>
            </div>
            <div className={styles.item}>
                <a>Users</a>
            </div>
            <div className={styles.item}>
                <a>News</a>
            </div>
            <div className={styles.item}>
                <a>Music</a>
            </div>
            <div className={styles.item}>
                <a>Settings</a>
            </div>
        </div>
    )
}

export {
    Navbar
}