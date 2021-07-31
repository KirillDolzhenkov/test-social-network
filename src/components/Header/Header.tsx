import React from "react";
import styles from "./Header.module.css";

//types:
type HeaderPropsType = {}

//FC:
const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <div className={styles.header}>
            Header
        </div>
    )
}

export {
    Header
}