import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom"

class ProfileContainer extends Component {
    componentDidMount() {
        let currentProfileId = this.props.match.params.userId;
        const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
        axios.get(baseUrl + `/profile/${currentProfileId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} currentProfile={this.props.currentProfile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentProfile: state.profilePage.currentProfile
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
