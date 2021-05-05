import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile_reducer";

const MyPostContainer = (props) => {

    let state = props.store.getState();

    let onPostChange = (text) => {
        const action = updateNewPostTextActionCreater(text);
        props.store.dispatch(action);
    }

    let addPost = () => {
        props.store.dispatch(addPostActionCreater());
    }

    return (
        <MyPosts postsData={state.profilePage.postsData}
                 newPostText={state.profilePage.newPostText}
                 updateNewPostText={onPostChange}
                 addPost={addPost}/>
    );
};

export default MyPostContainer;
