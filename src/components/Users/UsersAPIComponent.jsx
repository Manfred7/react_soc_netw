import React, {Component} from 'react';
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {UsersAPI} from "../../API/API";

class UsersAPIComponent extends Component {

    componentDidMount() {
        this.props.togleIsFetching(true);

        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.togleIsFetching(false);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.togleIsFetching(true);

        UsersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.togleIsFetching(false);
            })
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        console.log('isFollowingInProgress',this.props.isFollowingInProgress)
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       usersData={this.props.usersData}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress ={this.props.followingInProgress}
                       togleIsFollowing={this.props.togleIsFollowing}
                />
            </div>

        );
    }
}


export default UsersAPIComponent;
