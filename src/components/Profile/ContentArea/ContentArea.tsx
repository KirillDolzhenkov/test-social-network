import React from "react";
import {Field, reduxForm} from "redux-form";

import styles from "./ContentArea.module.css"
import {ProfileInitialStateType} from "../../../redux/profile-reducer";
import {PostContainer} from "./Post/PostContainer";
import {maxLengthCreator, requiredField} from "../../../utils/validator";
import {FormControl} from "../../common/FormControls/FormControls";

//types:
type confPropsType = {
    form: string;
}
type PostMessageFormType = any //need to fix any!!!
type ContentAreaPropsType = {
    profilePage: ProfileInitialStateType
    addPost: (newPostText: string) => void
    setNewPostText: (newText: string) => void
}

//functional component:
const ContentArea: React.FC<ContentAreaPropsType> = (props) => {

    const {
        profilePage,
        addPost,
        setNewPostText, //need to delete
    } = props;

    let postsElements = profilePage.posts.map(p =>
        <PostContainer
            key={p.id}
            message={p.message}
            id={p.id}
            likesCount={p.likesCount}
            isLiked={p.isLiked}
        />
    )

    const addPostHandler = (value: any) => { //need to fix any!!!
        if (value.newPostText) {
            addPost(value.newPostText);
        }
    }

    return (
        <div className={styles.postBlock}>
            <PostMessageReduxForm onSubmit={addPostHandler}/>
            <div className={styles.posts}>
                {
                    postsElements
                }
            </div>
        </div>
    );
}

const maxLength3 = maxLengthCreator(3);//test value!!!

const PostMessageForm: React.FC<PostMessageFormType> = (props) => {

    const {
        handleSubmit,
    } = props;

    return (
        <form onSubmit={handleSubmit} className={styles.inputAreaElements}>
            <div>
                <Field
                    placeholder={"What's new?"}
                    name={"newPostText"}
                    component={FormControl}
                    formControlValue={"textarea"}
                    validate={[requiredField, maxLength3]}
                />
            </div>
            <div>
                <button>Post</button>
            </div>
        </form>
    );
}

//reduxForm HOC:
const PostMessageReduxForm = reduxForm<confPropsType, any>({form: 'postMessageReduxForm'})(PostMessageForm); //need to check types!!!

export {
    ContentArea
}