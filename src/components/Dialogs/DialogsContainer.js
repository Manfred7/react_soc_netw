import Dialogs from "./Dialogs";
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.newMessageText
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
