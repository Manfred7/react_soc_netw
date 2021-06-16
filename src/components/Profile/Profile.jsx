import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo currentProfile={props.currentProfile}
                         status={props.status}
                         updateStatus={props.updateStatus} />
            <MyPostContainer  />
        </div>
    );
}

export default Profile;
