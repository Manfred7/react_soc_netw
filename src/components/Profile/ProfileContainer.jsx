import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_reducer";

class ProfileContainer extends Component {
    componentDidMount() {
        const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
        //axios.get(baseUrl + `/profile/${this.props.profileId}`)
        axios.get(baseUrl + `/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
    //            this.props.setTotalUsersCount(response.data.totalCount);
    //            this.props.togleIsFetching(false);
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} currentProfile ={this.props.currentProfile} />
            </div>
        );
    }
}

let mapStateToProps =(state)=>{
    return {
        currentProfile : state.profilePage.currentProfile
    }
}
export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);
