import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let preparedDialogs = props.dialogsData.map(dialog => <Dialog key={dialog.id} id={dialog.id}
                                                                  userName={dialog.userName}/>);

    let preparedMessages = props.messagesData.map(msg => <Message key={msg.id} txt={msg.txt}/>);

    const addMessage = () => {
        props.addMessage();
    }
    const onMessageChange = (e) => {
        props.onMessageChange(e.target.value);
    }

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

            <div>
                <div>
                    <textarea placeholder={"enter new message text"}
                              value={props.newMessageText}
                              onChange={onMessageChange}/>
                </div>
                <div>
                    <button onClick={addMessage}>
                        Add new Message
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;
