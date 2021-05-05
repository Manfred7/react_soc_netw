const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreater = () => {

    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreater = (value) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newValue: value
    }
}

const profileReducer = (state, action) => {
    switch (action.type) {

        case  ADD_POST: {
            state.curPostId = state.curPostId + 1;
            const likesCount = state.curPostId;
            const newPost = {
                id: state.curPostId,
                text: state.newPostText,
                LikeCount: likesCount
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        }

        case  UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newValue;
            return state;
        }

        default:
            return state;

    }
}

export default profileReducer;
