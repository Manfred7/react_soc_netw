import React from 'react';
import s from "./MyPosts.module.css";
import Post from "../Post/Post";
import {Field, reduxForm} from 'redux-form'

let NewPostForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea" type="text"/>
            </div>
            <div>
                <button type="submit">Send new Post</button>
            </div>
        </form>
    )
}

const createReduxForm = reduxForm({ form: 'newPostFrm' })
NewPostForm = createReduxForm(NewPostForm);

const MyPosts = (props) => {

    const preparedPosts = props.postsData.map(postInfo => <Post key={postInfo.id}
                                                                text={postInfo.text}
                                                                LikeCount={postInfo.LikeCount}/>);
    const addNewPost = (values) => {
        props.addPost(values.newPostText);
        //  (reset('newDialogFrm'));
    }

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>

            <div className={s.newPost}>
                <NewPostForm onSubmit={addNewPost}/>
            </div>

            <div>
                {preparedPosts}
            </div>

        </div>
    );
};

export default MyPosts;

