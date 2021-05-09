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

            let newPostId = state.curPostId + 1;

            const newPost = {
                id: newPostId,
                text: state.newPostText,
                LikeCount: newPostId
            };

            return {
                ...state,
                curPostId: newPostId,
                newPostText: "",
                postsData: [...state.postsData, newPost]
            };
        }

        case  UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newValue
            };
        }

        default:
            return state;

    }
}

export default profileReducer;
