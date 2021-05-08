import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../redux/dialogs_reducer";
import StoreContext from "../../store_context";

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();

                    const addMessage = () => {
                        const action = addMessageActionCreater();
                        store.dispatch(action);
                    }
                    const onMessageChange = (text) => {
                        const action = updateNewMessageTextActionCreater(text)
                        store.dispatch(action);
                    }

                    return (
                        <Dialogs addMessage={addMessage}
                                 onMessageChange={onMessageChange}
                                 dialogsData={state.messagesPage.dialogsData}
                                 messagesData={state.messagesPage.messagesData}
                                 newMessageText={state.newMessageText}
                        />
                    )
                }

            }
        </StoreContext.Consumer>
    )

}

export default DialogsContainer;
