import React from 'react';
import s from './Users.module.css'
import * as axios from "axios";
import ava from '../../Assets/images/users_default_avatar.png'

const Users = (props) => {

    if (props.usersData.length === 0) {
        const baseUrl ='https://social-network.samuraijs.com/api/1.0';
        axios.get(baseUrl+'/users').then( response=>{
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            {props.usersData.map((u) => {

                return (

                    <div key={u.id} className={s.users}>
                        {u.name}
                        <div>

                            <img className={s.ava} src={
                                u.photos.small!=null? u.photos.small: ava}
                            />

                        </div>
                        <div>{u.id}</div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>follow</button>}

                        </div>
                        <div>{u.status}</div>

                    </div>)
            })}
        </div>
    );
};

export default Users;
