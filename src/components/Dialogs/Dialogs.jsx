import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}> {props.userName}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.txt}>{props.txt}</div>
    )
}

const Dialogs = (props) =>
{
    return (
        <div className={s.dialogs}>

            <div className={s.dialogItems}>
                <Dialog id="1" userName="Dimych"/>
                <Dialog id="2" userName="Andrey"/>
                <Dialog id="3" userName="Sveta"/>
                <Dialog id="4" userName="Sasha"/>
                <Dialog id="5" userName="Victor"/>
                <Dialog id="6" userName="Valera"/>
            </div>

            <div className={s.messages}>
                <Message txt="Hi!"/>
                <Message txt="How are You"/>
                <Message txt="Fine"/>
            </div>
        </div>
    );
}


export default Dialogs;
