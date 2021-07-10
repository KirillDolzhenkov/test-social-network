import React from "react";
import {Post} from "./Post/Post";
import styles from "./ContentArea.module.css"
import {PostsDataType} from "../../../store";

type ContentAreaPropsType = {
    posts: Array<PostsDataType>
}


const ContentArea: React.FC<ContentAreaPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);

    return (
        <div className={styles.postBlock}>
            <h2>My posts: </h2>
            <hr/>
            <textarea placeholder={"Write something"}/>
            <span>
                <button>send</button>
            </span>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export {
    ContentArea
}