import React from 'react';
import s from "./Message.modile.css";


const Message = (props) => {
    return (
        <div className={s.txt}>{props.txt}</div>
    )
}

export default Message;
