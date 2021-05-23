import React, {Component} from 'react';
import * as axios from "axios";
import Users from "./Users";


class UsersAPIComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
        axios.get(baseUrl + `/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged =(pageNumber)=>{
        const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
        axios.get(baseUrl + `/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
        this.props.setCurrentPage(pageNumber)
    }

    render() {

        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   usersData={this.props.usersData}
                   onPageChanged={this.onPageChanged}
                   follow ={this.props.follow}
                   unfollow={ this.props.unfollow}
            />
        );
    }
}


export default UsersAPIComponent;
