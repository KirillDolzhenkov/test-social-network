import React from "react";

import styles from "./Button.module.css"

//types:
type ButtonPropsType = {
    btnName: string
}

//functional component:
const Button: React.FC<ButtonPropsType> = (props) => {

    const {
        btnName,
    } = props;

    return <button className={styles.button}>{btnName}</button>
}

export {
    Button
}