import React from 'react';
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = (props) => {

    let preparedPosts = props.postsData.map(postInfo => <Post key={postInfo.id}
                                                              text={postInfo.text}
                                                              LikeCount={postInfo.LikeCount}/>);

    let newPostElement = React.createRef();

    const addPost = () => {
        const action = {
            type: 'ADD-POST'
        }

        props.dispatch(action);

    }

    const onPostChange = () => {

        const action = {
            type: 'UPDATE-NEW-POST-TEXT',
            newValue: newPostElement.current.value
        }

        props.dispatch(action);
        //props.updateNewPostText(text);
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


