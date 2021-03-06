import React from 'react';
import s from "./Users.module.css";
import ava from "../../Assets/images/users_default_avatar.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const getPages = () => {
        return (
            pages.map(p => {
                    return <span className={props.currentPage === p && s.SelectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>
                                     {p}
                        </span>
                }
            )
        )
    }

    return (
        <div>
            <div>
                <div>
                    {getPages()}
                </div>

                {props.usersData.map((u) => {
                    return (
                        <div key={u.id} className={s.users}>
                            {u.name}
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={s.ava} alt=""
                                         src={u.photos.small != null ? u.photos.small : ava}
                                    />
                                </NavLink>
                            </div>
                            <div>
                                {u.id}
                            </div>
                            <div>
                                {u.followed ?
                                    <button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() => {
                                        props.DoUnfollowUser(u.id);
                                    }}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() => {
                                        props.DoFollowUser(u.id);
                                    }}>follow</button>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Users;
