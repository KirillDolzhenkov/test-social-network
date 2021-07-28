import React from "react";
import {RootReduxStoreType} from "../../../redux/redux-store";
import {ContentArea} from "./ContentArea";
import {AddPostAC, SetNewPostTextAC} from "../../../redux/profile-reducer";

//types:
type ContentAreaContainerPropsType = {
    store: RootReduxStoreType
}

//FC:
const ContentAreaContainer: React.FC<ContentAreaContainerPropsType> = (props) => {

    const addPost = (newPostText: string) => {
        props.store.dispatch(AddPostAC(newPostText));
    }
    const updateNewPostText = (newText: string) => {
        props.store.dispatch(SetNewPostTextAC(newText));
    }
    return (
        <div>
            <ContentArea
                profilePage={props.store.getState().profilePage}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </div>
    )
}

export {
    ContentAreaContainer
}