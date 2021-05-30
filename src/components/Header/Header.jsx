import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    const getLoginLink=()=>{
        return <NavLink to={"/login"}> Login-></NavLink>
    }

    const getLoginInfo =()=>{

        return (
            props.isAuth ? 'User: '+props.login: getLoginLink()
        )
    }

    return (
        <header className={s.header}>
            <img
                src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"
                alt=""
            />
            <div className={s.loginBlock}>
                {getLoginInfo()}
            </div>
        </header>
    );
};

export default Header;
