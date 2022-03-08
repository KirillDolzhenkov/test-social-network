import React from "react";
import {NavLink} from "react-router-dom";

import style from "../Dialogs.module.css";

//types:
type DialogPropsType = {
    id: number
    name: string
}

//functional component:
const DialogItem: React.FC<DialogPropsType> = (props) => {

    const {
        id,
        name,
    } = props;

    return (
        <div className={style.dialog + '' + style.active}>
            <NavLink to={"/dialogs/" + id}>{name}</NavLink>
        </div>
    )
}

export {
    DialogItem
}