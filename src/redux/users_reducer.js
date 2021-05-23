const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    usersData: [],
    pageSize:100,
    totalUsersCount:0,
    currentPage:1
};

export const followAc = (userId) => {

    return {
        type: FOLLOW,
        id: userId
    }
}

export const UnFollowAc = (userId) => {

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

export const setTotalUsersCountAC = (usersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: usersCount

    }
}
export const setCurrentPageAC = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: pageNumber

    }
}

const usersReducer = (state = initialState, action) => {
    console.log(action);
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

        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        default:
            return state;

    }
}

export default usersReducer;
