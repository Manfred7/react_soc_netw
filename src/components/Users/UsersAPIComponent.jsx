import React, {Component} from 'react';
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersAPIComponent extends Component {

    componentDidMount() {
        this.props.togleIsFetching(true);
        const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
        axios.get(baseUrl + `/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.togleIsFetching(false);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.togleIsFetching(true);

        const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
        axios.get(baseUrl + `/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.togleIsFetching(false);
            })
        this.props.setCurrentPage(pageNumber)
    }

    render() {

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
                />
           </div>

        );
    }
}


export default UsersAPIComponent;
