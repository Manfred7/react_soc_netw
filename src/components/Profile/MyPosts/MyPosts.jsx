import React from 'react';
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = (props) => {

    let preparedPosts = props.postsData.map(postInfo => <Post key={postInfo.id}
                                                              text={postInfo.text}
                                                              LikeCount={postInfo.LikeCount}/>);


    let newPostElement =  React.createRef();

    const addPost=()=> {
        let text= newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>

            <div className={s.newPost}>
                <div>
                    <textarea ref={newPostElement}> </textarea>
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


