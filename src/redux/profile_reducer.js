const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    curPostId: 2,
    newPostText: "",
    postsData: [
        {id: 1, text: "post1", LikeCount: 777},
        {id: 2, text: "post2", LikeCount: 5}
    ]
};

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

const profileReducer = (state = initialState, action) => {
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
