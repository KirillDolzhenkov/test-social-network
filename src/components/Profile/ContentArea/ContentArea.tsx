import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import styles from "./ContentArea.module.css"
import {ActionType, RootReduxStoreType} from "../../../redux/redux-store";
import {AddPostAC, SetNewPostTextAC} from "../../../redux/profile-reducer";

//types:
type ContentAreaPropsType = {
    dispatch: (action: ActionType) => void
    store: RootReduxStoreType
}

//FC:
const ContentArea: React.FC<ContentAreaPropsType> = (props) => {

    const state = props.store.getState().profilePage; //getState!!!
    let postsElements = state.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);


    const addPostHandler = () => {
        if (state.newPostText) {
            props.dispatch(AddPostAC(state.newPostText.trim()));
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget?.value;
        props.dispatch(SetNewPostTextAC(newText));
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
                /*ref={testButtonRef}*/
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