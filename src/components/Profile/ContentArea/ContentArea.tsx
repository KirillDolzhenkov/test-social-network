import React from "react";
import {Post} from "./Post/Post";
import styles from "./ContentArea.module.css"
import {PostsDataType} from "../../../store";

type ContentAreaPropsType = {
    PostsData: Array<PostsDataType>
}

/*type PostsDataType = {
    id: number
    message: string
    likesCount: number
}*/

const ContentArea: React.FC<ContentAreaPropsType> = (props) => {

    const PostsData: Array<PostsDataType> = [
        {id: 1, message: "Hi dude", likesCount: 12},
        {id: 1, message: "nice photos!", likesCount: 11},
    ]

    let postsElements = PostsData.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);

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