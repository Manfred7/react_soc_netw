const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    usersData: []
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

        default:
            return state;

    }
}

export default usersReducer;
