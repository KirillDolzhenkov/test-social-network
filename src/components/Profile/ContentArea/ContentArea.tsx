import React, {ChangeEvent, createRef} from "react";
import {Post} from "./Post/Post";
import styles from "./ContentArea.module.css"
import {ActionType, AddPostAC, AppStateType, PostsDataType, SetNewPostTextAC} from "../../../redux/store";

//types:
type PostsStatePropsType = {
    posts: Array<PostsDataType>
    newPostText: string
}

type ContentAreaPropsType = {
    state: PostsStatePropsType
    dispatch: (action: ActionType) => any
}

//FC:
const ContentArea: React.FC<ContentAreaPropsType> = (props) => {

    let postsElements = props.state.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);
    const testButtonRef: any = createRef();

    const onClickHandler = () => {
        const newPost = testButtonRef.currentTarget?.value;
        props.dispatch(AddPostAC(newPost));
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget?.value;
        props.dispatch(SetNewPostTextAC(newText));
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