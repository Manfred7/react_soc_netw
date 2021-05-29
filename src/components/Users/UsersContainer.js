import UsersAPIComponent from "./UsersAPIComponent";
import {connect} from "react-redux";
import {
    followAc,
    setCurrentPageAC, setIsFetchingAc,
    setTotalUsersCountAC,
    setUsers, togleIsFetchingAc,
    UnFollowAc
} from "../../redux/users_reducer";

let mapStateToProps = (state) => {
    let usersPage = state.usersPage;
    return {
        usersData: usersPage.usersData,
        pageSize: usersPage.pageSize,
        totalUsersCount: usersPage.totalUsersCount,
        currentPage: usersPage.currentPage,
        isFetching: usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            const action = followAc(id);
            dispatch(action);
        },
        unfollow: (id) => {
            const action = UnFollowAc(id)
            dispatch(action);
        },
        setUsers: (users) => {
            const action = setUsers(users)
            dispatch(action);
        },
        setCurrentPage: (pageNumber) => {
            const action = setCurrentPageAC(pageNumber)
            dispatch(action);
        },

        setTotalUsersCount: (usersCount) => {
            const action = setTotalUsersCountAC(usersCount)
            dispatch(action);

        },
        togleIsFetching: (enabled) => {
            const action = togleIsFetchingAc(enabled);
            dispatch(action);
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer;
