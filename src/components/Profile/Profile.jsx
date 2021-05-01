import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://cdn.shazoo.ru/c800x360/161743_5LpKjDRLyv_4790632_samurai_jack_2422x1500_w.jpg"
                    alt=""
                />
            </div>

            <div>
                <div className={s.ava}>
                    ava
                </div>
                <div className={s.description}>
                    +description :)
                </div>
            </div>
            <MyPosts/>

        </div>
    );
};

export default Profile;
