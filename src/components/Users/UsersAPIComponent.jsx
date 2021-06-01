import React, {Component} from 'react';
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersAPIComponent extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
      }

    onPageChanged = (pageNumber) => {
        this.props.getNextPageUsers(pageNumber, this.props.pageSize);
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
                       DoFollowUser={this.props.DoFollowUser}
                       DoUnfollowUser={ this.props.DoUnfollowUser}
                />
            </div>

        );
    }
}


export default UsersAPIComponent;
