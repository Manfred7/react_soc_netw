import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let preparedDialogs = props.state.dialogsData.map(dialog => <Dialog key={dialog.id} id={dialog.id}
                                                            userName={dialog.userName}/>);

    let preparedMessages = props.state.messagesData.map(msg => <Message key={msg.id} txt={msg.txt}/>);

    let newMsgElement = React.createRef();

    const addMessage =()=>{
        let text = newMsgElement.current.value;
        alert(text);

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

            <div >
                <div>
                    <textarea ref={newMsgElement}> </textarea>
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
