import UsersAPIComponent from "./UsersAPIComponent";
import {connect} from "react-redux";
import { follow,  setCurrentPage, setTotalUsersCount, setUsers, togleIsFetching, unfollow} from "../../redux/users_reducer";

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

let  diaspatchToPropsObj ={
    follow,
    unfollow ,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    togleIsFetching
}

const UsersContainer = connect(mapStateToProps, diaspatchToPropsObj)(UsersAPIComponent);
export default UsersContainer;
