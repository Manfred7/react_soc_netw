import React from 'react';
import s from './Users.module.css'

const Users = (props) => {

    debugger;

    if (props.usersData.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                fullName: "Ivanov",
                status: "Gesund",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 2,
                followed: false,
                fullName: "Petrov",
                status: "Boss",
                location: {city: "Bryansk", country: "Russia"}
            },
            {
                id: 3,
                followed: true,
                fullName: "Sidorov",
                status: "Boss to",
                location: {city: "Leningrad", country: "Russia"}
            }
        ])
    }

    return (
        <div>
            {props.usersData.map((u) => {

                return (

                    <div key={u.id} className={s.users}>
                        {u.fullName}
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
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>)
            })}
        </div>
    );
};

export default Users;
