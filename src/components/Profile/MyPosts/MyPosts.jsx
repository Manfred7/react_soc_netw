import React from 'react';
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>

            <div className={s.newPost}>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add new Post</button>
                </div>
            </div>

            <div>
                <Post text="post1" LikeCount="777"/>
                <Post text="post2" LikeCount="17"/>
                <Post text="post3" LikeCount="34"/>
                <Post text="post4" LikeCount="80"/>
            </div>

        </div>
    );
};

export default MyPosts;


