import React, {Component} from 'react';
import s from './Users.module.css'
import * as axios from "axios";
import ava from '../../Assets/images/users_default_avatar.png'


class Users extends Component {

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
        //let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        const getPages = () => {
            return (
                pages.map(p => {
                        return <span className={this.props.currentPage === p && s.SelectedPage}
                                     onClick={() => { this.onPageChanged(p) }}>
                                     {p}
                        </span>
                    }
                )
            )
        }
        let l = getPages();

        return (

            <div>
                <div>
                    {getPages()}
                </div>

                {this.props.usersData.map((u) => {
                    return (
                        <div key={u.id} className={s.users}>
                            {u.name}
                            <div>
                                <img className={s.ava}
                                     src={u.photos.small != null ? u.photos.small : ava}
                                />
                            </div>
                            <div>
                                {u.id}
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>follow</button>}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}


export default Users;
