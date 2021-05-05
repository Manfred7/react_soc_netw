import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../redux/dialogs_reducer";

const DialogsContainer = (props) => {

    debugger;
    let state = props.store.getState();

    const addMessage = () => {
        const action = addMessageActionCreater();
        props.store.dispatch(action);
    }
    const onMessageChange = (text) => {
        const action = updateNewMessageTextActionCreater(text)
        props.store.dispatch(action);
    }

    return (
        <Dialogs addMessage={addMessage}
                 onMessageChange={onMessageChange}
                 dialogsData ={state.messagesPage.dialogsData}
                 messagesData={state.messagesPage.messagesData}
                 newMessageText ={state.newMessageText}
        />
    );
};

export default DialogsContainer;
