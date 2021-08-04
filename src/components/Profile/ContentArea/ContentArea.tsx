import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import styles from "./ContentArea.module.css"
import {ProfileInitialStateType} from "../../../redux/profile-reducer";

//types:
type ContentAreaPropsType = {
    profilePage: ProfileInitialStateType
    addPost: (newPostText: string) => void
    updateNewPostText: (newText: string) => void
}

//FC:
const ContentArea: React.FC<ContentAreaPropsType> = (props) => {

    const state = props.profilePage; //state!!!

    let postsElements = state.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount} />);

    const addPostHandler = () => {
        if (state.newPostText) {
            props.addPost(state.newPostText)
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget?.value;
        props.updateNewPostText(newText)
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addPostHandler();
        }
    }

    return (
        <div className={styles.postBlock}>
            <h2>My posts: </h2>
            <hr/>
            <textarea
                value={state.newPostText}
                onChange={onChangeHandler}
                placeholder={"Write something"}
                onKeyPress={onKeyPressHandler}
            />
            <span>
                <button onClick={addPostHandler}>send</button>
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