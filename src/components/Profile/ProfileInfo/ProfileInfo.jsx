import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://cdn.shazoo.ru/c800x360/161743_5LpKjDRLyv_4790632_samurai_jack_2422x1500_w.jpg"

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
        </div>
    );
};

export default ProfileInfo;
