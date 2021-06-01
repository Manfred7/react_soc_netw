import UsersAPIComponent from "./UsersAPIComponent";
import {connect} from "react-redux";
import {
    DoFollowUserThunkCreater,
    DoUnfollowUserThunkCreater,
    follow, getNextPageUsersThunkCreater, getUsersThunkCreater,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    togleIsFetching,
    togleIsFollowing,
    unfollow
} from "../../redux/users_reducer";

let mapStateToProps = (state) => {
    let usersPage = state.usersPage;
    return {
        usersData: usersPage.usersData,
        pageSize: usersPage.pageSize,
        totalUsersCount: usersPage.totalUsersCount,
        currentPage: usersPage.currentPage,
        isFetching: usersPage.isFetching,
        followingInProgress:usersPage.followingInProgress
    }
}

let  diaspatchToPropsObj ={
    follow,
    unfollow ,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    togleIsFetching,
    togleIsFollowing,
    getUsers: getUsersThunkCreater,
    getNextPageUsers:getNextPageUsersThunkCreater,
    DoUnfollowUser:DoUnfollowUserThunkCreater,
    DoFollowUser:DoFollowUserThunkCreater
}

const UsersContainer = connect(mapStateToProps, diaspatchToPropsObj)(UsersAPIComponent);
export default UsersContainer;
