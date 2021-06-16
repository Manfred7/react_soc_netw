import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileInfoThunkCreater,
    getProfileStatusThunkCreater,
    updateProfileStatusThunkCreater
} from "../../redux/profile_reducer";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {withRouter} from "react-router-dom"
import {compose} from "redux";


const OUR_PROFILE_ID = 17051;//17051 - это я  //2 это Димыч

class ProfileContainer extends Component {
    componentDidMount() {
        let currentProfileId = this.props.match.params.userId;
        if (!currentProfileId) {
            currentProfileId = OUR_PROFILE_ID;
        }
        this.props.getProfileInfo(currentProfileId);
        this.props.getProfileStatus(currentProfileId);
    }

    render() {
debugger;
        return (
            <div>
                <Profile {...this.props}
                         currentProfile={this.props.currentProfile}
                         status={this.props.status}
                         updateStatus ={this.props.updateProfileStatus}

                />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentProfile: state.profilePage.currentProfile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfileInfo: getProfileInfoThunkCreater,
        getProfileStatus: getProfileStatusThunkCreater,
        updateProfileStatus: updateProfileStatusThunkCreater
    }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);// вложенность сверху вниз


