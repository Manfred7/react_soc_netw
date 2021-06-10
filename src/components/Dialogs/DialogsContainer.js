import Dialogs from "./Dialogs";
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";
import React from "react";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";

let mapStateToProps = (state) => {
    let messagesPage = state.messagesPage;
    return {
        dialogsData: messagesPage.dialogsData,
        messagesData: messagesPage.messagesData,
        newMessageText: messagesPage.newMessageText

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            const action = addMessageActionCreater();
            dispatch(action);
        },
        onMessageChange: (text) => {
            const action = updateNewMessageTextActionCreater(text)
            dispatch(action);
        }
    }
}

const  AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
