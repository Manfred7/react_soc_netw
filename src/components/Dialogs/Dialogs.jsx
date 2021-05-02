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

const Dialogs = (props) => {
    let dialogsData = [
        {id: "1", userName: "Dimych"},
        {id: "2", userName: "Andrey"},
        {id: "3", userName: "Sveta"},
        {id: "4", userName: "Sasha"},
        {id: "5", userName: "Victor"},
        {id: "6", userName: "Valera"},
    ];

    let preparedDialogs = dialogsData.map(dialog => <Dialog key={dialog.id} id={dialog.id}
                                                            userName={dialog.userName}/>);

    let messagesData = [
        {id: "1", txt: "Hi!"},
        {id: "2", txt: "Andrey"},
        {id: "3", txt: "Fine"},
        {id: "4", txt: "Me too!"}
    ];

    let preparedMessages = messagesData.map(msg => <Message key={msg.id} txt={msg.txt}/>);

    return (
        <div className={s.dialogs}>

            <div className={s.dialogItems}>
                {
                    preparedDialogs
                }
            </div>

            <div className={s.messages}>
                {
                    preparedMessages
                }
            </div>
        </div>
    );
}


export default Dialogs;
