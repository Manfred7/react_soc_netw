import {UsersAPI} from "../API/API";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';


let initialState = {
    usersData: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

export const togleIsFollowing = (idUserInProgress, isInProgress) => {

    return {
        type: TOGGLE_IS_FOLLOWING,
        idUserInProgress: idUserInProgress,
        inProgress: isInProgress
    }
}

export const togleIsFetching = (isInProgress) => {

    return {
        type: TOGGLE_IS_FETCHING,
        inProgress: isInProgress
    }
}
export const follow = (userId) => {

    return {
        type: FOLLOW,
        id: userId
    }
}

export const unfollow = (userId) => {

    return {
        type: UN_FOLLOW,
        id: userId

    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const setTotalUsersCount = (usersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: usersCount

    }
}
export const setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: pageNumber
    }
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case  FOLLOW: {
            let stateCopy = {
                ...state,
                usersData: state.usersData.map(u => {
                        if (u.id === action.id) {
                            return {
                                ...u, followed: true
                            }
                        }
                        return u;
                    }
                )
            }
            return stateCopy;
        }
        case  UN_FOLLOW: {
            let stateCopy = {
                ...state,
                usersData: state.usersData.map(u => {
                        if (u.id === action.id) {
                            return {
                                ...u, followed: false
                            }
                        }
                        return u;
                    }
                )

            }
            return stateCopy;
        }
        case SET_USERS: {
            return {...state, usersData: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.inProgress}
        }

        case TOGGLE_IS_FOLLOWING: {
            console.log('action.inProgress', action.idUserInProgress);
            return {
                ...state,
                followingInProgress: action.inProgress ?
                    [...state.followingInProgress, action.idUserInProgress]
                    : state.followingInProgress.filter(id => id !== action.idUserInProgress)
            }
        }

        default:
            return state;
    }
}

export const getUsersThunkCreater = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(togleIsFetching(true));

        UsersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(togleIsFetching(false));
            })
    }
}

export const getNextPageUsersThunkCreater = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(togleIsFetching(true));

        UsersAPI.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(togleIsFetching(false));
            })
        dispatch(setCurrentPage(pageNumber));
    }
}

export const DoUnfollowUserThunkCreater = (id) => {
    return (dispatch) => {
        dispatch(togleIsFollowing(id, true));
        UsersAPI.DoUnfollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(id))
            }
            dispatch(togleIsFollowing(id, false));
        });
    }
}

export const DoFollowUserThunkCreater = (id) => {
    return (dispatch) => {
        dispatch(togleIsFollowing(id, true));

        UsersAPI.DoFollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(togleIsFollowing(id, false));
        });
    }
}


export default usersReducer;
