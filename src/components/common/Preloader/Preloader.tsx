import React from "react";

import {ReactComponent as PreloaderLogo} from "./three-dots.svg";
import styles from "./Preloader.module.css";

//types:
type PreloaderPropsType = {}

//functional component:
const Preloader: React.FC<PreloaderPropsType> = (props) => {

    //loading:
    return (
        <div className={styles.main}>
            <PreloaderLogo fill="#2b3f4f" stroke="current"/>
        </div>
    )
}

export {
    Preloader
}
