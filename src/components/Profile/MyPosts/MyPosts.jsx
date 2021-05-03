import React from 'react';
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = (props) => {
    let preparedPosts = props.postsData.map(postInfo => <Post key={postInfo.id}
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


