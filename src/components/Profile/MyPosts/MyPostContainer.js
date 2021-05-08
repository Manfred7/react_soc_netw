import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile_reducer";
import StoreContext from "../../../store_context";

const MyPostContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state =store.getState();

                let onPostChange = (text) => {
                    const action = updateNewPostTextActionCreater(text);
                    store.dispatch(action);
                }

                let addPost = () => {
                    store.dispatch(addPostActionCreater());
                }

                return (
                    <MyPosts postsData={state.profilePage.postsData}
                             newPostText={state.profilePage.newPostText}
                             updateNewPostText={onPostChange}
                             addPost={addPost}/>
                )
            }

        }
        </StoreContext.Consumer>
    );
};

export default MyPostContainer;
