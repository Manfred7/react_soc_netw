import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reset, reduxForm} from 'redux-form'

let NewDialogForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="newMessageText" component="textarea" type="text" placeholder={"enter new message text"}/>
            </div>
            <div>
                <button type="submit">Add new Message</button>
            </div>
        </form>
    )
}

const createReduxForm = reduxForm({form: 'newDialogFrm'})
NewDialogForm = createReduxForm(NewDialogForm);

const Dialogs = (props) => {

    let preparedDialogs = props.dialogsData.map(dialog => <Dialog key={dialog.id} id={dialog.id}
                                                                  userName={dialog.userName}/>);

    let preparedMessages = props.messagesData.map(msg => <Message key={msg.id} txt={msg.txt}/>);

    const addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
      //  (reset('newDialogFrm'));
    }
/*
    const submitMyForm=(data)=> {
        const { createRecord, reset } = this.props;
        return createRecord(data).then(() => {
            props.addMessage(data.newMessageText);
            reset();
            // do other success stuff
        });
    }
*/
    if (!props.isAuth) return <Redirect to={"/login"}/>;

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
                <NewDialogForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}


export default Dialogs;

