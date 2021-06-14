import React from "react";
import styles from "./Header.module.css";

type HeaderPropsType = {}

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