import React from 'react';
import s from './Profile.module.css'

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
            <div className={s.myPost}> mypost
                <div className={s.newPost}> new post</div>
            </div>
            <div>
                <div className={`${s.item} ${s.active}`}>post1</div>
                <div className={s.item}>post2</div>
                <div className={s.item}>post3</div>
                <div className={s.item}>post4</div>
            </div>
        </div>
    );
};

export default Profile;
