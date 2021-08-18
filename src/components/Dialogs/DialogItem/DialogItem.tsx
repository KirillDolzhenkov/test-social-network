import React from "react";
import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

//types:
type DialogPropsType = {
    id: number
    name: string
}

//function component:
const DialogItem: React.FC<DialogPropsType> = (props) => {

    return (
        <div className={styles.dialog + '' + styles.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export {
    DialogItem
}