import React from "react";
import styles from "./Post.module.css"

type PostPropsType = {
    id: number
    message: string
    likesCount: number
    isLiked: boolean
    addLike: (id: number, isLiked: boolean) => void
    removeLike: (id: number, isLiked: boolean) => void
}


const Post: React.FC<PostPropsType> = (props) => {

    return (
        <div className={styles.items}>
            <img src='https://cdn4.iconfinder.com/data/icons/spring-festival/512/man-512.png' alt=""/>
            <span>{props.message}</span>
            {/*<span >♥{props.likesCount}</span>*/}
            <span>
            {
                props.isLiked
                    ? <div onClick={() => {
                        props.removeLike(props.id, props.isLiked);
                    }}>Like ♥{props.likesCount}</div>
                    :
                    <div onClick={() => {
                        props.addLike(props.id, props.isLiked);
                    }}>Like ♥{props.likesCount}</div>
            }
            </span>
            <hr/>
        </div>
    )
}

export {
    Post
}