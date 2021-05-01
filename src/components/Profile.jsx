import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://cdn.shazoo.ru/c800x360/161743_5LpKjDRLyv_4790632_samurai_jack_2422x1500_w.jpg"/>
            </div>

            <div>ava+description :)</div>
            <div>mypost
                <div> new post</div>
            </div>
            <div>
                <div>post1</div>
                <div>post2</div>
                <div>post3</div>
                <div>post4</div>
            </div>
        </div>
    );
};

export default Profile;
