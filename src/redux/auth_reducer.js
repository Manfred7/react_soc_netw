import {AuthAPI} from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching :false,
    isAuth: false
};

export const setAuthUserData = (data) => {
    return {
        type: SET_USER_DATA,
        userData: data
    }
}

export const togleIsFetching = (isInProgress) => {

    return {
        type: TOGGLE_IS_FETCHING,
        inProgress:isInProgress
    }
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA: {
            return {...state,...action.userData, isAuth : true}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.inProgress}
        }

        default:
            return state;
    }
}

export const getAuthorUserThunkCreater = (id) => {
    return (dispatch) => {

        AuthAPI.getAuthorUserData()
            .then(data => {
                dispatch(setAuthUserData(data.data));
            })
    }
}
export default authReducer;
