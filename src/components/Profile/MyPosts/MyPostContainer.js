import MyPosts from "./MyPosts";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile_reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreater());
        },
        updateNewPostText: (text) => {
            const action = updateNewPostTextActionCreater(text);
            dispatch(action);
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;
