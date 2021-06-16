import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import defaultAva from "../../../Assets/images/users_default_avatar.png"
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.currentProfile) {
        return (
            <div>
                <Preloader/>
            </div>
        )
    }

    let avaImg = props.currentProfile.photos.large ? props.currentProfile.photos.large : defaultAva;

    return (
        <div>
            <div>
                <img
                    src="https://cdn.shazoo.ru/c800x360/161743_5LpKjDRLyv_4790632_samurai_jack_2422x1500_w.jpg" alt=""
                />
            </div>

            <div>
                <div className={s.ava}>
                    <img src={avaImg} width="80px" alt=""/>

                </div>
                <div className={s.description}>
                    <div>userId: {props.currentProfile.userId}</div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                    <div>fullName:{props.currentProfile.fullName}</div>
                    <div>lookingForAJobDescription:{props.currentProfile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
