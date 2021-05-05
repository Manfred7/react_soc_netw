import React from 'react';
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = (props) => {

    const preparedPosts = props.postsData.map(postInfo => <Post key={postInfo.id}
                                                                text={postInfo.text}
                                                                LikeCount={postInfo.LikeCount}/>);

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = (e) => {

        props.updateNewPostText(e.target.value);
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
                    <button onClick={onAddPost}>
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


