import React, {Component} from 'react';
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth_reducer";

class HeaderContainer extends Component {

    componentDidMount() {

        const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
        axios.get(baseUrl + `/auth/me`, {withCredentials: true})
            .then(response => {
                this.props.setAuthUserData(response.data.data)
            })
    }

    render() {
        return (
                <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        login:state.auth.login,
        email: state.auth.email,
        isAuth:state.auth.isAuth
    }
}
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
