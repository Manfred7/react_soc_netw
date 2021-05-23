import Users from "./Users";
import {connect} from "react-redux";
import {
    followAc,

    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsers,
    UnFollowAc
} from "../../redux/users_reducer";

let mapStateToProps = (state) => {
    let usersPage = state.usersPage;
    return {
        usersData: usersPage.usersData,
        pageSize: usersPage.pageSize,
        totalUsersCount: usersPage.totalUsersCount,
        currentPage: usersPage.currentPage
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
        setCurrentPage:(pageNumber)=>{
           const action = setCurrentPageAC(pageNumber)
           dispatch(action);
        },

        setTotalUsersCount:(usersCount)=>{
            const action = setTotalUsersCountAC(usersCount)
            dispatch(action);

        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;
