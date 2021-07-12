import React, {ChangeEvent, ChangeEventHandler, createRef} from "react";
import {Post} from "./Post/Post";
import styles from "./ContentArea.module.css"
import {PostsDataType} from "../../../redux/store";

type PostsStatePropsType = {
    posts: Array<PostsDataType>
    newPostText: string
}

type ContentAreaPropsType = {
    state: PostsStatePropsType
    addPost: (message: string) => void
    setNewPostText: (text: string) => void
}


const ContentArea: React.FC<ContentAreaPropsType> = (props) => {

    let postsElements = props.state.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);

    const testButtonRef: any = createRef();
    const onClickHandler = () => {
        const newMessage = testButtonRef.currentTarget?.value;
        props.addPost(newMessage);
        props.setNewPostText('');

    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.setNewPostText(e.currentTarget?.value);
    }

    return (
        <div className={styles.postBlock}>
            <h2>My posts: </h2>
            <hr/>
            <textarea
                value={props.state.newPostText}
                onChange={onChangeHandler}
                ref={testButtonRef}
                placeholder={"Write something"}
            />
            <span>
                <button onClick={onClickHandler}>send</button>
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