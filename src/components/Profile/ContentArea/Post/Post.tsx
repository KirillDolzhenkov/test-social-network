import React from "react";
import styles from "./Post.module.css"

type PostPropsType = {
    id: number
    message: string
    likesCount: number
}


const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={styles.items}>
            <img src='https://cdn4.iconfinder.com/data/icons/spring-festival/512/man-512.png' alt=""/>
            <span>{props.message}</span><br/>
            <span>♥{props.likesCount}</span>
        </div>
    )
}

export {
    Post
}