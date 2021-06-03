import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfoThunkCreater} from "../../redux/profile_reducer";
import {Redirect, withRouter} from "react-router-dom"

const OUR_PROFILE_ID =2;
class ProfileContainer extends Component {
    componentDidMount() {
        let currentProfileId = this.props.match.params.userId;
        if (!currentProfileId)
        {
            currentProfileId =OUR_PROFILE_ID;
        }
        this.props.getProfileInfo(currentProfileId);
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={"/login"}/>;

        return (
            <div>
                <Profile {...this.props} currentProfile={this.props.currentProfile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentProfile: state.profilePage.currentProfile,
        isAuth: this.state.auth.isAuth
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getProfileInfo: getProfileInfoThunkCreater})(withUrlDataContainerComponent);
