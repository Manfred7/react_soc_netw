import React from 'react';
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}> myposts

            <div className={s.newPost}>
                <textarea> </textarea>
                <button>Add new Post</button>
            </div>

            <div>
                <Post text="post1"/>
                <Post text="post2"/>
                <Post text="post3"/>
                <Post text="post4"/>
            </div>

        </div>
    );
};

export default MyPosts;


