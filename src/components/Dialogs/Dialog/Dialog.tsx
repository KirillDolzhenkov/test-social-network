import React from "react";
import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: number
    name: string
}

const Dialog: React.FC<DialogPropsType> = (props) => {
    return (
        <div className={styles.dialog + '' + styles.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export {
    Dialog
}