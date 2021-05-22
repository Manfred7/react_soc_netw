import React, {Component} from 'react';
import s from './Users.module.css'
import * as axios from "axios";
import ava from '../../Assets/images/users_default_avatar.png'


class Users extends Component {

    constructor(props) {
        super(props);

        const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
        axios.get(baseUrl + '/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (

            <div>
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
