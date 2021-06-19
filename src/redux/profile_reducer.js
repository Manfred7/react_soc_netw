import {ProfileAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE ='SET_USER_PROFILE';
const SET_USER_STATUS ='SET_USER_STATUS';

let initialState = {
    curPostId: 2,
    postsData: [
        {id: 1, text: "post1", LikeCount: 777},
        {id: 2, text: "post2", LikeCount: 5}
    ],
    currentProfile:null,
    status:"status"
};

export const addPostActionCreater = (newValue) => {

    return {
        type: ADD_POST,
        value: newValue
    }
}

export const setUserStatus = (newValue) => {
    debugger;
    return {
        type: SET_USER_STATUS,
        newValue: newValue
    }
}
export const setUserProfile = (newProfileValue) => {

    return {
        type: SET_USER_PROFILE,
        newValue: newProfileValue
    }
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case  ADD_POST: {

            let newPostId = state.curPostId + 1;

            const newPost = {
                id: newPostId,
                text: action.value,
                LikeCount: newPostId
            };

            return {
                ...state,
                curPostId: newPostId,
                postsData: [...state.postsData, newPost]
            };
        }


        case SET_USER_PROFILE:{
            return {
                ...state,
                currentProfile: action.newValue
            };

        }
        case SET_USER_STATUS:{

            return {
                ...state,
                status: action.newValue
            };
        }

        default:
            return state;

    }
}

export const getProfileInfoThunkCreater = (profileId) => {
    return (dispatch) => {

        ProfileAPI.getProfileInfo(profileId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export const getProfileStatusThunkCreater = (profileId) => {
    return (dispatch) => {

        ProfileAPI.getProfileStatus(profileId)
            .then(data => {
                debugger;

                dispatch(setUserStatus(data));
            })
    }
}

export const updateProfileStatusThunkCreater = (status) => {
    return (dispatch) => {

        ProfileAPI.updateProfileStatus(status)
            .then(data => {
                if (data.resultCode===0) {
                    dispatch(setUserStatus(status));
                }
            })
    }
}

export default profileReducer;
