import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthorUserThunkCreater, setAuthUserData} from "../../redux/auth_reducer";

class HeaderContainer extends Component {

    componentDidMount() {

        this.props.getAuthorUser();
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

export default connect(mapStateToProps, {setAuthUserData, getAuthorUser: getAuthorUserThunkCreater})(HeaderContainer);
