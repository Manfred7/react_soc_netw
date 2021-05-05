import React from 'react';
import s from "./MyPosts.module.css";
import Post from "../Post/Post";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile_reducer";


const MyPosts = (props) => {

    const preparedPosts = props.postsData.map(postInfo => <Post key={postInfo.id}
                                                                text={postInfo.text}
                                                                LikeCount={postInfo.LikeCount}/>);

    const addPost = () => {
        props.dispatch(addPostActionCreater());
    }

    const onPostChange = (e) => {
        const action = updateNewPostTextActionCreater(e.target.value);
        props.dispatch(action);
    }

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>

            <div className={s.newPost}>
                <div>
                    <textarea placeholder={"enter new post text"}
                              value={props.newPostText}
                              onChange={onPostChange}/>

                </div>
                <div>
                    <button onClick={addPost}>
                        Add new Post
                    </button>
                </div>
            </div>

            <div>
                {preparedPosts}
            </div>

        </div>
    );
};

export default MyPosts;


