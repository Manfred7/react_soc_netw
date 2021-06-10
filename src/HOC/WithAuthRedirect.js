import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
/*
export const WithAuthRedirect=(Component)=> {

    const AuthRedirectComponent =(props)=> {
        debugger;
            if (!props.isAuth) return <Redirect to={"/login"}/>;

            return <Component {...props}/>;
        }
        return AuthRedirectComponent
 */




export const WithAuthRedirect=(Component)=> {


    class AuthRedirectComponent extends React.Component {

        render() {

            if (!this.props.isAuth) return <Redirect to={"/login"}/>;

            return <Component {...this.props}/>;
        }
    }

    let mapStateToPropsForRedirect = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

    return ConnectedAuthRedirectComponent
}
