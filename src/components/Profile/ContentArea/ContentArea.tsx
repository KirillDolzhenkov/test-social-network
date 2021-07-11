import React, {createRef} from "react";
import {Post} from "./Post/Post";
import styles from "./ContentArea.module.css"
import {PostsDataType} from "../../../redux/store";

type ContentAreaPropsType = {
    posts: Array<PostsDataType>
    addPost: (message: string)=>void
}


const ContentArea: React.FC<ContentAreaPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);
    const testButtonRef: any = createRef()
    const onClickHandler = () => {
        const newMessage = testButtonRef.current?.value;
        props.addPost(newMessage);
    }

    return (
        <div className={styles.postBlock}>
            <h2>My posts: </h2>
            <hr/>
            <textarea
                ref={testButtonRef}
                placeholder={"Write something"}
            />
            <span>
                <button onClick={onClickHandler} >send</button>
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