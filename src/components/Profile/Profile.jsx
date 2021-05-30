import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo currentProfile={props.currentProfile} />
            <MyPostContainer  />
        </div>
    );
}

export default Profile;
