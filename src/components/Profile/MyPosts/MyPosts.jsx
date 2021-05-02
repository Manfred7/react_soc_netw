import React from 'react';
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: "1", text: "post1!", LikeCount: "777"},
        {id: "2", text: "post2", LikeCount: "5"},
        {id: "3", text: "post3", LikeCount: "53"},
        {id: "4", text: "post4", LikeCount: "17"},
        {id: "5", text: "post5", LikeCount: "888"}
    ];

    let preparedPosts = postsData.map(postInfo => <Post key={postInfo.id}
                                                        text={postInfo.text}
                                                        LikeCount={postInfo.LikeCount}/>);

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
                {preparedPosts}
            </div>

        </div>
    );
};

export default MyPosts;


