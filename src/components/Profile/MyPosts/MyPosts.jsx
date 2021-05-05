import React from 'react';
import s from "./MyPosts.module.css";
import Post from "../Post/Post";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/state";



const MyPosts = (props) => {

    const preparedPosts = props.postsData.map(postInfo => <Post key={postInfo.id}
                                                              text={postInfo.text}
                                                              LikeCount={postInfo.LikeCount}/>);

    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreater());
    }

    const onPostChange = () => {
        const action = updateNewPostTextActionCreater(newPostElement.current.value);
        props.dispatch(action);
    }

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>

            <div className={s.newPost}>
                <div>
                    <textarea ref={newPostElement}
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


