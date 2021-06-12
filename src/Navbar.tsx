import React from "react";

type NavbarPropsType = {}

const Navbar: React.FC<NavbarPropsType> = (props) => {
    return (
        <div className={"navbar"}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>Users</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </div>
    )
}

export {
    Navbar
}